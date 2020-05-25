import { put, call, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { isEmpty } from 'lodash';

import { authRef } from 'config/firebase';
import { signInSuccess, signInError, authSuccess, authError } from './actions';
import { SIGN_IN, CHECK_AUTH } from './constants';

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

export function* getAuth() {

  const onAuthStateChanged = () => {
    return new Promise((resolve, reject) => {
      authRef.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(message.error('login first'));
        }
      });
    });
  }

  try {
    const user = yield call(onAuthStateChanged);
    yield put(authSuccess(user))
  }

  catch (error) {
    yield put(authError())
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appSaga() {
  // Watches for REGISTER actions and calls postRegister when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SIGN_IN, getSignIn);
  yield takeLatest(CHECK_AUTH, getAuth);
}
