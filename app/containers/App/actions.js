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
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from './constants';

export const signIn = params => ({
  type: SIGN_IN,
  params,
});

export const signInSuccess = payload => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

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

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const authSuccess = payload => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authError = () => ({
  type: AUTH_ERROR,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutError = () => ({
  type: LOGOUT_ERROR,
});
