/*
 *
 * HomePage actions
 *
 */
import { REGISTER } from './constants';

export const register = params => ({
  type: REGISTER,
  params,
});
