/**
 *
 * Slides
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Col, message } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { isEmpty, map } from 'lodash';

import SlideContent from 'components/SlideContent';
import { slidesData } from './data';
import Styled from './style';

function Slides({ liveLink }) {
  const [animateSlideIndex, setanimateSlideIndex] = useState(0);

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

  const onAfterChange = currentSlide => {
    setanimateSlideIndex(currentSlide);
  };

  const onBeforeChange = () => {
    setanimateSlideIndex(null);
  };

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
  };

  const handleLiveEvent = () => {
    message.info('Live Event is comming soon!', 2);
  };

  const renderEventBox = () => {
    if (!isEmpty(liveLink)) {
      return (
        <Styled.EventLiveContainer>
          <Styled.EventLive>Your Event is now Live</Styled.EventLive>
          <Styled.Btn onClick={handleLiveEvent}>
            <span>Enter</span>
          </Styled.Btn>
        </Styled.EventLiveContainer>
      );
    }
    return (
      <Styled.TimeBox>
        Event starts in <Styled.Time>09:10</Styled.Time>min
      </Styled.TimeBox>
    );
  };

  const renderSlides = () =>
    map(slidesData, (slide, index) => {
      const { id, name, image, audio, audioInfo } = slide;
      return (
        <SlideContent
          key={id}
          animate={animateSlideIndex}
          index={index}
          name={name}
          image={image}
          audio={audio}
          audioInfo={audioInfo}
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
  liveLink: PropTypes.string,
};

export default Slides;
