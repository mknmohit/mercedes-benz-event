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
  ENTER_LIVE_EVENT,
} from './constants';

export const initialState = {
  talkLink: null,
  isUserEnterEvent: true,
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

      case ENTER_LIVE_EVENT:
        draft.isUserEnterEvent = action.params
        break;
    }
  });

export default homePageReducer;
