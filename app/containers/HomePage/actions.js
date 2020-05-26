/*
 *
 * HomePage actions
 *
 */
import {
  REGISTER,
  LIVE_LINK,
  LIVE_LINK_SUCCESS,
  LIVE_LINK_ERROR,
  LISTEN_ADMIN_DATA,
  LISTEN_ADMIN_DATA_SUCCESS,
  LISTEN_ADMIN_DATA_ERROR,
} from './constants';

export const register = params => ({
  type: REGISTER,
  params,
});

export const liveLink = () => ({
  type: LIVE_LINK,
});

export const liveLinkSuccess = payload => ({
  type: LIVE_LINK_SUCCESS,
  payload,
});

export const liveLinkError = () => ({
  type: LIVE_LINK_ERROR,
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
