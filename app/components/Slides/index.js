/**
 *
 * Slides
 *
 */

import React from 'react';
import { Row, Col, message } from 'antd';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideContent from 'components/SlideContent';
import Styled from './style';

function Slides() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    prevArrow: <Styled.PrevBtn />,
    nextArrow: <Styled.NextBtn />,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    cssEase: 'linear',
}

  const handleLiveEvent = () => {
    message.info('Live Event is comming soon!', 2)
  }

  const renderEventBox = () => {
    if(true) {
      return (
        <Styled.TimeBox>
          Event starts in <Styled.Time>09:10</Styled.Time>min
        </Styled.TimeBox>
      )
    }
    return (
      <Styled.EventLiveContainer>
        <Styled.EventLive>
          Your Event is now Live
        </Styled.EventLive>
        <Styled.Btn onClick={handleLiveEvent}>
          <span>Enter</span>
        </Styled.Btn>
      </Styled.EventLiveContainer>
    )
  }

  const getNextArrow = () => {
    return (
      <div>
        <RightOutlined />
      </div>
    )
  }

  const renderSlides = () => {
    return (
      <Styled.Slides {...sliderSettings}>
        <SlideContent />
        <SlideContent />
        <SlideContent />
      </Styled.Slides>
    )
  }

  return (
    <Row>
      <Col xs={24}>
        <Styled.Root>
          <Styled.Container>
            <Styled.EventDetails>
              <Styled.Heading>Mercedes-Benz</Styled.Heading>
              <Styled.SubHeading>New Product Launch</Styled.SubHeading>
              { renderEventBox() }
            </Styled.EventDetails>
          </Styled.Container>
          {renderSlides()}
        </Styled.Root>
      </Col>
    </Row>
  )
}

export default Slides;
