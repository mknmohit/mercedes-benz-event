/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectUserData = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData,
  );

const makeSelectIsAuth = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isAuthenticated,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  makeSelectUserData,
  makeSelectLocation,
  makeSelectIsAuth,
};
