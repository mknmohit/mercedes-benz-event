/**
 *
 * SlideContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from "react-animated-css";

import Slide1Img from 'images/slide-1-car.png';
import Engine43cSound from 'audios/43-C-Engine.mp3';
import Styled from './style';

function SlideContent({ animate, index }) {

  const engineSound = new Audio(Engine43cSound)

  const playAudio = () => {
    engineSound.play();
    engineSound.loop = true;
  }

  const stopAudio = () => {
    engineSound.pause()
    engineSound.currentTime = 0;
  }

  return (
    <div>
      <Styled.SlideImg src={Slide1Img} alt="car" />
      <Animated animationIn="fadeInLeft" animationInDuration={400} isVisible={animate === index}>
        <Styled.ModelName>Mercedes-benz C 300</Styled.ModelName>
        <Styled.PeddleContainer>
          <Styled.PeddleInfo>Press the peddle to accelerate</Styled.PeddleInfo>
          <Styled.Peddle onMouseDown={playAudio} onMouseUp={stopAudio}>
            <Styled.PeddleImg />
          </Styled.Peddle>
        </Styled.PeddleContainer>
      </Animated>
    </div>
  );
}

SlideContent.propTypes = {
  animate: PropTypes.number,
  index: PropTypes.number
};

export default SlideContent;
