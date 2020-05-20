import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

/* eslint-disable react/jsx-no-bind */
function Router({ userData, isAuthenticated }) {
  /* routeProps are passed by react-router-dom, routeProps includes {match: {…}, location: {…}, history: {…}, staticContext: undefined} */
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routeProps => (
          <HomePage
            {...routeProps}
            userData={userData}
            isAuthenticated={isAuthenticated}
          />
        )}
      />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

Router.propTypes = {
  userData: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

export default Router;
