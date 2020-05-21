/**
 *
 * SlideContent
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Slide1Img from 'images/slide-1-car.png';
import Styled from './style';

function SlideContent() {
  return (
    <div>
      <Styled.SlideImg src={Slide1Img} alt="car" />
      <div>
        <Styled.ModelName>Mercedes-benz C 300</Styled.ModelName>
        <Styled.PeddleContainer>
          <Styled.PeddleInfo>Press the peddle to accelerate</Styled.PeddleInfo>
          <Styled.Peddle>
            <Styled.PeddleImg />
          </Styled.Peddle>
        </Styled.PeddleContainer>
      </div>
    </div>
  );
}

SlideContent.propTypes = {};

export default SlideContent;
