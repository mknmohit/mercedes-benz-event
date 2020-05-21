/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Router from 'router';
import GlobalStyle from 'theme/globalStyles';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSelectUserData, makeSelectIsAuth } from './selectors';
import reducer from './reducer';
import saga from './saga';

export function App({ userData, isAuthenticated }) {

  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <Router userData={userData} isAuthenticated={isAuthenticated} />
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  userData: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
  isAuthenticated: makeSelectIsAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
