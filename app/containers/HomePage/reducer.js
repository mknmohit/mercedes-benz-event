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
  SLIDES_DATA,
  SLIDES_DATA_SUCCESS,
  SLIDES_DATA_ERROR,
} from './constants';

export const initialState = {
  talkLink: null,
  isUserEnterEvent: false,
  adminData: {},
  loadingSlidesData: false,
  slidesData: [],
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
        draft.isUserEnterEvent = action.params;
        break;

      case SLIDES_DATA:
        draft.loadingSlidesData = true;
        break;
      
      case SLIDES_DATA_SUCCESS:
        draft.loadingSlidesData = false;
        draft.slidesData = action.payload;
        break;

      case SLIDES_DATA_ERROR:
        draft.loadingSlidesData = false;
        draft.slidesData = [];
        break;
    }
  });

export default homePageReducer;
