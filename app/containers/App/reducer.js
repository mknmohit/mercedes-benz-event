/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  SIGN_IN_SUCCESS,
  REGISTER_SUCCESS,
} from './constants';

export const initialState = {
  userData: null,
  isAuthenticated: undefined,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS:
      case REGISTER_SUCCESS:
        draft.userData = action.payload;
        draft.isAuthenticated = true;
        break;
    }
  });

export default appReducer;
