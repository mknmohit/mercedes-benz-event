/**
 *
 * SlideContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

import Styled from './style';

function SlideContent({ animate, index, name, image, audioInfo, onPlayAudio, onStopAudio }) {

  const handlePlayAudio = e => {
    e.preventDefault();
    onPlayAudio()
  }

  return (
    <div>
      <Styled.SlideImg src={image} alt="car" />
      <Animated
        animationIn="fadeInLeft"
        animationInDuration={400}
        isVisible={animate === index}
      >
        <Styled.ModelName>{name}</Styled.ModelName>
        <Styled.PeddleContainer>
          <Styled.PeddleInfo>{audioInfo}</Styled.PeddleInfo>
          <Styled.Peddle
            onMouseDown={handlePlayAudio}
            onMouseUp={onStopAudio}
            onBlur={onStopAudio}
            onTouchStart={handlePlayAudio}
            onTouchEnd={onStopAudio}
          >
            <Styled.PeddleImg />
          </Styled.Peddle>
        </Styled.PeddleContainer>
      </Animated>
    </div>
  );
}

SlideContent.propTypes = {
  animate: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  audioInfo: PropTypes.string,
  onPlayAudio: PropTypes.func,
  onStopAudio: PropTypes.func,
};

export default SlideContent;
