/*
 *
 * HomePage actions
 *
 */
import {
  REGISTER,
  TALK_LINK,
  TALK_LINK_SUCCESS,
  TALK_LINK_ERROR,
  LISTEN_ADMIN_DATA,
  LISTEN_ADMIN_DATA_SUCCESS,
  LISTEN_ADMIN_DATA_ERROR,
  ENTER_LIVE_EVENT,
  SLIDES_DATA,
  SLIDES_DATA_SUCCESS,
  SLIDES_DATA_ERROR,
} from './constants';

export const register = params => ({
  type: REGISTER,
  params,
});

export const talkLink = () => ({
  type: TALK_LINK,
});

export const talkLinkSuccess = payload => ({
  type: TALK_LINK_SUCCESS,
  payload,
});

export const talkLinkError = () => ({
  type: TALK_LINK_ERROR,
});

export const listenAdminData = () => ({
  type: LISTEN_ADMIN_DATA,
});

export const listenAdminDataSuccess = payload => ({
  type: LISTEN_ADMIN_DATA_SUCCESS,
  payload,
});

export const listenAdminDataError = () => ({
  type: LISTEN_ADMIN_DATA_ERROR,
});

export const enterLiveEvent = params => ({
  type: ENTER_LIVE_EVENT,
  params,
});

export const fetchSlidesData = () => ({
  type: SLIDES_DATA,
});

export const slidesDataSuccess = payload => ({
  type: SLIDES_DATA_SUCCESS,
  payload,
});

export const slidesDataError = () => ({
  type: SLIDES_DATA_ERROR,
});
