/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  TALK_LINK_SUCCESS,
  TALK_LINK_ERROR,
  LISTEN_ADMIN_DATA_SUCCESS,
} from './constants';

export const initialState = {
  talkLink: null,
  adminData: {},
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TALK_LINK_SUCCESS:
        draft.talkLink = action.payload;
        break;

      case TALK_LINK_ERROR:
        draft.talkLink = '';
        break;

      case LISTEN_ADMIN_DATA_SUCCESS:
        draft.adminData = action.payload;
        break;
    }
  });

export default homePageReducer;
