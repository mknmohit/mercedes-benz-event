/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { LIVE_LINK_SUCCESS, LIVE_LINK_ERROR } from './constants';

export const initialState = {
  liveLink: null,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft  => {
    switch (action.type) {
      case LIVE_LINK_SUCCESS:
        draft.liveLink = action.payload;
        break;

      case LIVE_LINK_ERROR:
        draft.liveLink = '';
        break;
    }
  });

export default homePageReducer;
