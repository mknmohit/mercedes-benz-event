/*
 *
 * HomePage actions
 *
 */
import {
  REGISTER,
} from './constants';

export const register = params => {
  return {
    type: REGISTER,
    params,
  };
}
