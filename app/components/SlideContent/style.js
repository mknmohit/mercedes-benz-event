import styled, { css } from 'styled-components';
import CarPeddle from 'images/peddle.png';

const SlideImg = styled.img`
  && {
    display: flex;
    margin: 10px auto 80px;

    ${props => props.theme.breakpoints.md} {
      width: 50%;
      margin-bottom: 0;
    }

    ${props =>
    props.isGif &&
      css`
        display: none;
      `}
  }
`;

const SlideGif = styled.img`
  && {
    display: none;
    margin: 10px auto 80px;

    ${props => props.theme.breakpoints.md} {
      width: 50%;
      margin-bottom: 0;
    }

    ${props =>
    props.isGif &&
      css`
        display: flex;
      `}
  }
`;

const ModelName = styled.div`
  background-color: #000;
  color: #fff4f4;
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  padding: 8px 18px;

  ${props => props.theme.breakpoints.lg} {
    font-size: 22px;
    padding: 10px 46px;
  }
`;

const PeddleContainer = styled.div`
  display: flex;
  padding-bottom: 46px;

  ${props => props.theme.breakpoints.lg} {
    padding-bottom: 40px;
  }
`;

const PeddleInfo = styled.div`
  color: #fff4f4;
  font-size: 16px;
  padding: 10px 17px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4cace9;

  @media (min-width: 375px) {
    font-size: 18px;
    padding: 10px 36px 10px 18px;
  }

  ${props => props.theme.breakpoints.lg} {
    font-size: 22px;
    padding: 14px 66px 14px 46px;
  }
`;

const Peddle = styled.div`
  width: 80px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;

  ${props => props.theme.breakpoints.lg} {
    width: 130px;
  }
`;

const PeddleImg = styled.div`
  background-image: url(${CarPeddle});
  width: 100%;
  height: 100px;
  left: 5px;
  background-size: 85%;
  position: absolute;
  top: -25px;

  &:active {
    transform: perspective(50px) rotateX(5deg);
  }

  ${props => props.theme.breakpoints.lg} {
    max-width: 90px;
    height: 130px;
    background-size: 100%;
    left: 18px;
  }
`;

export default {
  SlideImg,
  SlideGif,
  ModelName,
  PeddleContainer,
  PeddleInfo,
  Peddle,
  PeddleImg,
};
