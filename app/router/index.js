import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

/* eslint-disable react/jsx-no-bind */
function Router({ isAuthenticated }) {
  /* routeProps are passed by react-router-dom, routeProps includes {match: {…}, location: {…}, history: {…}, staticContext: undefined} */
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routeProps => (
          <HomePage {...routeProps} isAuthenticated={isAuthenticated} />
        )}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

Router.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Router;
