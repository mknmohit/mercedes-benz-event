/**
 *
 * Slides
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { isEmpty, map } from 'lodash';
import DateCountdown from 'react-date-countdown-timer';

import SlideContent from 'components/SlideContent';
import { slidesData } from './data';
import Styled from './style';

function Slides({ adminData, onEnterLiveEvent }) {
  const [animateSlideIndex, setanimateSlideIndex] = useState(0);
  const [isContdownOver, setIsCountdownOver] = useState(false);
  const [engineSound, setEngineSound] = useState(null)

  useEffect(() => {
    document.body.style.backgroundColor = '#edebeb';
  }, []);

  const getSliderSpeed = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    if (width < 768) {
      return 300;
    }
    return 500;
  };

  const onSliderMount = () => {
    setEngineSound(new Audio(slidesData[0].audio))
  }

  const onAfterChange = currentSlide => {
    setanimateSlideIndex(currentSlide);
    setEngineSound(new Audio(slidesData[currentSlide].audio))
  };

  const onBeforeChange = () => {
    setanimateSlideIndex(null);
    stopEngineSound()
  };

  const playEngineSound = () => {
    engineSound.play();
  }

  const stopEngineSound = () => {
    engineSound.pause();
    engineSound.currentTime = 0;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    prevArrow: <Styled.PrevBtn />,
    nextArrow: <Styled.NextBtn />,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: getSliderSpeed(),
    cssEase: 'linear',
    afterChange: onAfterChange,
    beforeChange: onBeforeChange,
    onInit: onSliderMount,
  };

  const onCountdownOver = () => setIsCountdownOver(true);

  const getCountdown = () => {
    if (!isEmpty(adminData)) {
      const { startTime } = adminData;
      return (
        <DateCountdown
          dateTo={startTime}
          mostSignificantFigure="hour"
          numberOfFigures={3}
          locales={[':', ':', ':', ':', ':', '']}
          locales_plural={[':', ':', ':', ':', ':', '']}
          callback={onCountdownOver}
        />
      );
    }
    return null;
  };

  const renderEventBox = () => {
    const { isEventStart, liveLink, isEventFinished  } = adminData;
    if (!isEmpty(liveLink) && isEventStart) {
      return (
        <Styled.EventLiveContainer>
          <Styled.EventLive>Your Event is now Live</Styled.EventLive>
          <Styled.Btn onClick={onEnterLiveEvent}>
            <span>Enter</span>
            <Styled.LiveIcon />
          </Styled.Btn>
        </Styled.EventLiveContainer>
      );
    }
    if (isEventStart && !isContdownOver) {
      return (
        <Styled.TimeBox>
          Event starts in <Styled.Time>{getCountdown()}</Styled.Time>
        </Styled.TimeBox>
      );
    }

    if (isEventFinished) {
      return (
        <Styled.TimeBox>
          Event is already finished
        </Styled.TimeBox>
      )
    }

    return <Styled.TimeBox>Event will start soon</Styled.TimeBox>;
  };

  const renderSlides = () =>
    map(slidesData, (slide, index) => {
      const { id, name, image, audioInfo } = slide;
      return (
        <SlideContent
          key={id}
          animate={animateSlideIndex}
          index={index}
          name={name}
          image={image}
          audioInfo={audioInfo}
          onPlayAudio={playEngineSound}
          onStopAudio={stopEngineSound}
        />
      );
    });

  return (
    <Styled.Row>
      <Col xs={24}>
        <Styled.Root>
          <Styled.Container>
            <Styled.EventDetails>
              <Styled.Heading>Mercedes-Benz</Styled.Heading>
              <Styled.SubHeading>New Product Launch</Styled.SubHeading>
              {renderEventBox()}
            </Styled.EventDetails>
          </Styled.Container>
          <Styled.Slides {...sliderSettings}>{renderSlides()}</Styled.Slides>
        </Styled.Root>
      </Col>
    </Styled.Row>
  );
}

Slides.propTypes = {
  adminData: PropTypes.object,
  onEnterLiveEvent: PropTypes.func,
};

export default Slides;
