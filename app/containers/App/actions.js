/*
 *
 * App actions
 *
 */

import {
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CHECK_AUTH,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from './constants';

export const signIn = params => {
  console.log('app action params', params);
  return {
    type: SIGN_IN,
    params,
  };
};

export const signInSuccess = payload => {
  console.log('signIn success payload', payload);
  return {
    type: SIGN_IN_SUCCESS,
    payload,
  };
};

export const signInError = () => ({
  type: SIGN_IN_ERROR,
});

export const registerSuccess = payload => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const registerError = () => ({
  type: REGISTER_ERROR,
});

export const checkAuth = () => {
  console.log('auth', CHECK_AUTH)
  return {
    type: CHECK_AUTH,
  };
}

export const authSuccess = payload => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authError = () => ({
  type: AUTH_ERROR,
});
