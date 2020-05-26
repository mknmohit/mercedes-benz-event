/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Registration from 'components/Registration';
import Slides from 'components/Slides';
import Footer from 'components/Footer';
import { register, talkLink, listenAdminData } from './actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Styled from './style';

export function HomePage({
  onRegister,
  userData,
  isAuthenticated,
  onListenTalkLink,
  onListenAdminData,
  homePageStore,
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => {
    if (isAuthenticated) {
      onListenTalkLink();
      onListenAdminData();
    }
  }, [isAuthenticated]);

  const handleRegistration = params => {
    onRegister(params);
  };

  if (isAuthenticated) {
    return (
      <Styled.Root>
        <Slides
          adminData={homePageStore.adminData}
        />
        <Footer />
      </Styled.Root>
    );
  }
  return (
    <div>
      <Registration onRegister={handleRegistration} />
    </div>
  );
}

HomePage.propTypes = {
  onRegister: PropTypes.func,
  onListenTalkLink: PropTypes.func,
  onListenAdminData: PropTypes.func,
  userData: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  homePageStore: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  homePageStore: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onRegister: params => dispatch(register(params)),
    onListenTalkLink: () => dispatch(talkLink()),
    onListenAdminData: () => dispatch(listenAdminData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
