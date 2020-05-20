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
} from './constants';

export const signIn = params => {
  console.log('app action params', params)
  return {
    type: SIGN_IN,
    params,
  };
}

export const signInSuccess = payload => {
  console.log('app payload', payload)
  return {
    type: SIGN_IN_SUCCESS,
    payload
  }
}

export const signInError = () => {
  return {
    type: SIGN_IN_ERROR,
  }
}

export const registerSuccess = payload => {
  return {
    type: REGISTER_SUCCESS,
    payload
  }
}

export const registerError = () => {
  return {
    type: REGISTER_ERROR,
  }
}
