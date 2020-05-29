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
import { isEmpty } from 'lodash';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import usePrevious from 'utils/usePrevious';
import Registration from 'components/Registration';
import Slides from 'components/Slides';
import LiveEvent from 'components/LiveEvent';
import Footer from 'components/Footer';
import {
  register,
  talkLink,
  listenAdminData,
  enterLiveEvent,
  fetchSlidesData,
} from './actions';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import Styled from './style';

export function HomePage({
  onRegister,
  isAuthenticated,
  onListenTalkLink,
  onListenAdminData,
  onEnterLiveEvent,
  onFetchSlidesData,
  homePageStore,
}) {
  useInjectReducer({ key: 'homePage', reducer });
  useInjectSaga({ key: 'homePage', saga });

  useEffect(() => {
    if (isAuthenticated) {
      onFetchSlidesData();
      onListenTalkLink();
      onListenAdminData();
    }
  }, [isAuthenticated]);

  const prevIsEventStart = usePrevious(homePageStore.adminData.isEventStart);

  useEffect(() => {
    if (prevIsEventStart && homePageStore.adminData.isEventStart === false) {
      onEnterLiveEvent(false);
    }
  }, [homePageStore.adminData.isEventStart]);

  const handleRegistration = params => {
    onRegister(params);
  };

  const handleEnterLiveEvent = () => {
    onEnterLiveEvent(true);
  };

  if (isAuthenticated) {
    const {
      adminData,
      slidesData,
      loadingSlidesData,
      isUserEnterEvent,
      talkLink: meetLink,
    } = homePageStore;

    if (isUserEnterEvent && !isEmpty(adminData)) {
      const { isEventStart, liveLink } = adminData;

      if (isEventStart && !isEmpty(liveLink)) {
        return (
          <Styled.Root>
            <LiveEvent adminData={adminData} talkLink={meetLink} />
            <Footer />
          </Styled.Root>
        );
      }
    }

    return (
      <Styled.Root>
        <Slides
          adminData={adminData}
          onEnterLiveEvent={handleEnterLiveEvent}
          slidesData={slidesData}
          isLoading={loadingSlidesData}
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
  onEnterLiveEvent: PropTypes.func,
  onListenAdminData: PropTypes.func,
  onFetchSlidesData: PropTypes.func,
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
    onEnterLiveEvent: params => dispatch(enterLiveEvent(params)),
    onFetchSlidesData: () => dispatch(fetchSlidesData()),
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
