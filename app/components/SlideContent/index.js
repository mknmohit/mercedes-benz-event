/**
 *
 * SlideContent
 *
 */

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Animated } from "react-animated-css";
import { isNil } from 'lodash';

import Styled from './style';

function SlideContent({
  animate,
  index,
  name,
  image,
  audio,
  audioInfo,
}) {

  useEffect(() => {
    if (animate === index) {
      stopAudio()
    }
  }, [animate])

  const engineSound = new Audio(audio)

  const playAudio = e => {
    e.preventDefault()
    engineSound.play();
    engineSound.loop = true;
  }

  const stopAudio = () => {
    engineSound.pause()
    engineSound.currentTime = 0;
  }

  return (
    <div>
      <Styled.SlideImg src={image} alt="car" />
      <Animated animationIn="fadeInLeft" animationInDuration={400} isVisible={animate === index}>
        <Styled.ModelName>{name}</Styled.ModelName>
        <Styled.PeddleContainer>
          <Styled.PeddleInfo>{audioInfo}</Styled.PeddleInfo>
          <Styled.Peddle onMouseDown={playAudio} onMouseUp={stopAudio} onMouseOut={stopAudio} onTouchStart={playAudio} onTouchEnd={stopAudio}>
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
  audio: PropTypes.string,
  audioInfo: PropTypes.string,
};

export default SlideContent;
