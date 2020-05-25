/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const SIGN_IN = 'app/App/SIGN_IN';
export const SIGN_IN_SUCCESS = 'app/App/SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'app/App/SIGN_IN_ERROR';

export const REGISTER_SUCCESS = 'app/App/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'app/App/REGISTER_ERROR';

export const CHECK_AUTH = 'app/App/CHECK_AUTH';
export const AUTH_SUCCESS = 'app/App/AUTH_SUCCESS';
export const AUTH_ERROR = 'app/App/AUTH_ERROR';

export const LOGOUT = 'app/App/LOGOUT';
export const LOGOUT_SUCCESS = 'app/App/LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'app/App/LOGOUT_ERROR';
