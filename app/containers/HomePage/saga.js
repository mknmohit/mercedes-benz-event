// import { take, call, put, select } from 'redux-saga/effects';
import { put, takeLatest, take, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga'
import { isEmpty } from 'lodash';
import { message } from 'antd';

import { authRef, dbRef } from 'config/firebase';
import { signIn, registerSuccess, registerError } from 'containers/App/actions';
import { REGISTER, LIVE_LINK } from './constants';
import { makeSelectUserData } from 'containers/App/selectors';
import { liveLinkSuccess, liveLinkError } from './actions';

export function* postRegister({ params }) {
  const { name, email, mobile } = params;

  let userData;
  let isAccountExit;
  yield authRef
    .createUserWithEmailAndPassword(email, mobile)
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`code: ${errorCode} & ErrorMsg: ${errorMessage}`);
      // User is already registered
      if (errorCode === 'auth/email-already-in-use') {
        isAccountExit = true;
      } else {
        // Some other error
        console.log('Some other error while registration');
      }
    })
    .then(cred => {
      // If new user (after successfully registration)
      if (cred) {
        const { user, user: { uid } } = cred;
        // update user profile
        user.updateProfile({
          displayName: name,
          phoneNumber: mobile
       })
        // Adding data to another collection
        dbRef.collection('registration').doc(uid).set({
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

export function* listenLiveLink() {
  const userData = yield select(makeSelectUserData())
  const ref = dbRef.collection("registration").doc(userData.uid)

  const channel = eventChannel(emit => {
    ref.onSnapshot(doc => {
      const user = doc.data();
      const { type, link } = user

      if (type === 'premium') {
        emit(link);
      }
    });
    return () => ref;
  });

  try {
    while (true) {
      const link = yield take(channel)
      yield put(liveLinkSuccess(link))
    }
  } catch (err) {
    yield put(liveLinkError())
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
  yield takeLatest(LIVE_LINK, listenLiveLink);

}
