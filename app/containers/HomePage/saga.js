// import { take, call, put, select } from 'redux-saga/effects';
import { put, call, takeLatest, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { isEmpty } from 'lodash';
import { message } from 'antd';

import { authRef, dbRef } from 'config/firebase';
import { signIn, registerSuccess, registerError } from 'containers/App/actions';
import { makeSelectUserData } from 'containers/App/selectors';
import {
  REGISTER,
  TALK_LINK,
  LISTEN_ADMIN_DATA,
  SLIDES_DATA,
} from './constants';
import {
  talkLinkSuccess,
  talkLinkError,
  listenAdminDataSuccess,
  listenAdminDataError,
  slidesDataSuccess,
  slidesDataError,
} from './actions';

export function* postRegister({ params }) {
  const { name, email, mobile } = params;

  let userData;
  let isAccountExit;
  yield authRef
    .createUserWithEmailAndPassword(email, mobile)
    .catch(error => {
      const errorCode = error.code;
      // User is already registered
      if (errorCode === 'auth/email-already-in-use') {
        isAccountExit = true;
      } else {
        // Some other error
        message.error('Something went wrong, try again', 3.5);
      }
    })
    .then(cred => {
      // If new user (after successfully registration)
      if (cred) {
        const {
          user,
          user: { uid },
        } = cred;
        // update user profile
        user.updateProfile({
          displayName: name,
          phoneNumber: mobile,
        });
        // Adding data to another collection
        dbRef
          .collection('registration')
          .doc(uid)
          .set({
            name,
            mobile,
            type: 'normal',
            link: '',
            uid,
          });

        userData = user;
      }
    });

  if (!isEmpty(userData)) {
    message.success('Successfully Registered', 2.5);
    yield put(registerSuccess(userData));
  } else if (isAccountExit) {
    yield put(signIn(params));
  } else {
    yield put(registerError());
  }
}

export function* listenTalkLink() {
  const userData = yield select(makeSelectUserData());
  const ref = dbRef.collection('registration').doc(userData.uid);

  const channel = eventChannel(emit => {
    ref.onSnapshot(doc => {
      const user = doc.data();
      const { type, link } = user;

      if (type === 'premium') {
        emit(link);
      }
    });
    return () => ref;
  });

  try {
    while (true) {
      const link = yield take(channel);
      yield put(talkLinkSuccess(link));
    }
  } catch (err) {
    yield put(talkLinkError());
  }
}

export function* listenAdminDB() {
  const ref = dbRef.collection('admin').doc('forAllUser');

  const channel = eventChannel(emit => {
    ref.onSnapshot(doc => {
      emit(doc.data());
    });
    return () => ref;
  });

  try {
    while (true) {
      const data = yield take(channel);
      yield put(listenAdminDataSuccess(data));
    }
  } catch (err) {
    yield put(listenAdminDataError());
  }
}

// export function* getAuth() {
//   const onAuthStateChanged = () =>
//     new Promise((resolve, reject) => {
//       authRef.onAuthStateChanged(user => {
//         if (user) {
//           resolve(user);
//         } else {
//           reject();
//         }
//       });
//     });

//   try {
//     const user = yield call(onAuthStateChanged);
//     yield put(authSuccess(user));
//   } catch (error) {
//     yield put(authError());
//   }
// }

export function* getSlidesData() {
  const ref = dbRef.collection('admin').doc('slideData');

  const fetchSlidesData = () =>
    new Promise((resolve, reject) => {
      ref.get().then(results => {
        if (results) {
          resolve(results.data().cars);
        } else {
          reject();
        }
      });
    });

  try {
    const response = yield call(fetchSlidesData);
    yield put(slidesDataSuccess(response));
  } catch (err) {
    message.error('Something went wrong, please try again', 5);
    yield put(slidesDataError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  // Watches for REGISTER actions and calls postRegister when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(REGISTER, postRegister);
  yield takeLatest(TALK_LINK, listenTalkLink);
  yield takeLatest(LISTEN_ADMIN_DATA, listenAdminDB);
  yield takeLatest(SLIDES_DATA, getSlidesData);
}
