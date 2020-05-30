/**
 *
 * SlideContent
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';

import Styled from './style';

function SlideContent({
  animate,
  index,
  name,
  image,
  gif,
  audioInfo,
  onPlayAudio,
  onStopAudio,
  onImgLoad,
}) {
  const [showGif, setShowGif] = useState(false);

  const handlePeddleHold = e => {
    e.preventDefault();
    setShowGif(true);
    onPlayAudio();
  };

  const handlePeddleRelease = () => {
    setShowGif(false);
    onStopAudio();
  };

  const renderSlideImg = () => (
    <>
      <Styled.SlideImg src={image} alt="car" isGif={showGif} />
      <Styled.SlideGif src={gif} alt="car" isGif={showGif} onLoad={onImgLoad} />
    </>
  );

  return (
    <div>
      {renderSlideImg()}
      <Animated
        animationIn="fadeInLeft"
        animationInDuration={400}
        isVisible={animate === index}
      >
        <Styled.ModelName>{name}</Styled.ModelName>
        <Styled.PeddleContainer>
          <Styled.PeddleInfo>{audioInfo}</Styled.PeddleInfo>
          <Styled.Peddle
            onMouseDown={handlePeddleHold}
            onMouseUp={handlePeddleRelease}
            onBlur={handlePeddleRelease}
            onTouchStart={handlePeddleHold}
            onTouchEnd={handlePeddleRelease}
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
  gif: PropTypes.string,
  audioInfo: PropTypes.string,
  onPlayAudio: PropTypes.func,
  onStopAudio: PropTypes.func,
  onImgLoad: PropTypes.func,
};

export default SlideContent;
