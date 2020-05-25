/*
 *
 * HomePage actions
 *
 */
import { REGISTER, LIVE_LINK, LIVE_LINK_SUCCESS, LIVE_LINK_ERROR } from './constants';

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
  type: LIVE_LINK_ERROR
})
