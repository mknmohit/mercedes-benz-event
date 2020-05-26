/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { isNil } from 'lodash';

import Router from 'router';
import GlobalStyle from 'theme/globalStyles';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Navbar from 'components/Navbar';
import { makeSelectUserData, makeSelectIsAuth } from './selectors';
import { checkAuth, logout } from './actions';
import reducer from './reducer';
import saga from './saga';
import Styled from './style';

export function App({ userData, isAuthenticated, onCheckAuth, onLogout }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    if (isNil(isAuthenticated)) {
      onCheckAuth();
    }
  }, []);

  if (isNil(isAuthenticated)) {
    return (
      <Styled.Root>
        <Styled.Loader />
      </Styled.Root>
    );
  }

  return (
    <div>
      <Navbar
        isAuthenticated={isAuthenticated}
        onLogout={onLogout}
        userData={userData}
      />
      <Router userData={userData} isAuthenticated={isAuthenticated} />
      <GlobalStyle />
    </div>
  );
}

App.propTypes = {
  userData: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  onCheckAuth: PropTypes.func,
  onLogout: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userData: makeSelectUserData(),
  isAuthenticated: makeSelectIsAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCheckAuth: () => {
      dispatch(checkAuth());
    },
    onLogout: () => {
      dispatch(logout());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
