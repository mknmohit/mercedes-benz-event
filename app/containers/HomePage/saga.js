// import { take, call, put, select } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import { isEmpty } from 'lodash';
import { message } from 'antd';

import { authRef, dbRef } from 'config/firebase';
import { signIn, registerSuccess, registerError } from 'containers/App/actions';
import { REGISTER } from './constants';

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
        const { user } = cred;

        // Adding data to another collection
        dbRef.collection('registration').add({
          name,
          mobile,
          type: 'normal',
          uid: cred.user.uid,
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

/**
 * Root saga manages watcher lifecycle
 */
export default function* homePageSaga() {
  // Watches for REGISTER actions and calls postRegister when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(REGISTER, postRegister);
}
