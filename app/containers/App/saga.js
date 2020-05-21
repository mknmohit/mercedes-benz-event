import { put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { authRef } from 'config/firebase';
import { signInSuccess, signInError } from './actions';
import { SIGN_IN } from './constants';

export function* getSignIn({ params }) {
  const { email, mobile } = params;
  let userData;
  try {
    yield authRef.signInWithEmailAndPassword(email, mobile).then(cred => {
      // Show User data
      console.log('alreay reg', cred);
      userData = cred;
    });
    console.log('getSignIn userData', userData);
    message.success('Login successfully, welcome back!', 3);
    yield put(signInSuccess(userData));
  } catch (error) {
    console.log('sign in error', error);
    yield put(signInError(userData));
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
  yield takeLatest(SIGN_IN, getSignIn);
}
