/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
} from './constants';

export const initialState = {
  userData: null,
  isAuthenticated: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case AUTH_SUCCESS:
      case SIGN_IN_SUCCESS:
      case REGISTER_SUCCESS:
        draft.userData = action.payload;
        draft.isAuthenticated = true;
        break;

      case AUTH_ERROR:
      case SIGN_IN_ERROR:
      case REGISTER_ERROR:
      case LOGOUT_SUCCESS:
        draft.isAuthenticated = false;
        draft.userData = null;
        break;
    }
  });

export default appReducer;
