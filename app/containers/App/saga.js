import { put, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';

import { authRef } from 'config/firebase';
import { signInSuccess, signInError } from './actions';
import { SIGN_IN } from './constants';

export function* getSignIn({ params }) {
  const { email, mobile } = params;

  try {
    const response = yield authRef.signInWithEmailAndPassword(email, mobile)
    message.success('Login successfully, welcome back!', 3);

    const { user } = response
    yield put(signInSuccess(user));
  }

  catch (error) {
    message.error('Error While Signing In, Try Again', 4);
    yield put(signInError(error));
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
