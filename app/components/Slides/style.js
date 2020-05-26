import styled, { keyframes } from 'styled-components';
import slidesBg from 'images/slide-bg.png';
import Slider from 'react-slick';
import { Button, Row as antRow } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const commonStyling = `
  background-color: #000;
  color: #FFF4F4;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const arrowStyling = `
  top: 22%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: 16px;
  color: #fff;
  background: rgba(4, 4, 4, 0.6);
  z-index: 1;
`;

const arrowStylingLaptop = `
  top: 30%;
  width: 50px;
  height: 52px;
  font-size: 26px;
`;

const shineAnimation = keyframes`
  10% {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
  }
`;

const blinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
`;

const Row = styled(antRow)`
  flex: 1 0 auto;
`;

const Root = styled.div`
  height: 100%;
  background-image: url(${slidesBg});
  background-repeat: no-repeat;
  background-size: cover;

  ${props => props.theme.breakpoints.lg} {
    min-height: 100vh;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EventDetails = styled.div`
  padding-top: 50px;
  margin-bottom: 100px;

  ${props => props.theme.breakpoints.lg} {
    padding-top: 80px;
    margin-bottom: 0;
  }
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 0;
  line-height: 1;

  ${props => props.theme.breakpoints.lg} {
    font-size: 28px;
  }
`;

const SubHeading = styled.h3`
  font-size: 14px;

  ${props => props.theme.breakpoints.lg} {
    font-size: 16px;
  }
`;

const TimeBox = styled.div`
  ${commonStyling}
  padding: 8px 30px 8px 18px;

  ${props => props.theme.breakpoints.lg} {
    font-size: 22px;
    padding: 10px 36px 10px 20px;
  }
`;

const Time = styled.span`
  color: #4cace9;
  padding: 0 5px;
`;

const EventLiveContainer = styled.div`
  display: flex;
`;

const EventLive = styled.div`
  ${commonStyling}
  padding: 8px 16px;

  ${props => props.theme.breakpoints.lg} {
    font-size: 22px;
    padding: 12px 16px;
  }
`;

const Btn = styled(Button)`
  && {
    position: relative;
    overflow: hidden;
    color: #fff4f4;
    font-size: 18px;
    padding: 8px 32px;
    height: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4cace9;

    ${props => props.theme.breakpoints.lg} {
      font-size: 22px;
      padding: 12px 40px;
    }

    &:after {
      animation: ${shineAnimation} 5s ease-in-out infinite;
      animation-fill-mode: forwards;
      content: '';
      position: absolute;
      top: -110%;
      left: -210%;
      width: 200%;
      height: 200%;
      opacity: 0;
      transform: rotate(20deg);

      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0.13) 0%,
        rgba(255, 255, 255, 0.13) 77%,
        rgba(255, 255, 255, 0.5) 92%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &:active:after {
      opacity: 0;
    }
  }
`;

const LiveIcon = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #e74040;
  position: absolute;
  top: 10px;
  right: 9px;
  animation: ${blinkAnimation} 3s step-start 0s infinite;
`;

const Slides = styled(Slider)`
  .slick-dots {
    bottom: 0;
    margin: 16px auto 24px auto;
    position: relative;

    ${props => props.theme.breakpoints.lg} {
      margin-top: 0;
    }

    li {
      button:before {
        opacity: 0.3;
        color: #000;
        font-size: 13px;
      }

      button:hover {
        opacity: 0.5;
      }
    }

    .slick-active {
      button:before,
      button:hover {
        opacity: 1;
        color: #000;
      }
    }
  }

  .slick-prev:hover,
  .slick-prev:focus,
  .slick-next:hover,
  .slick-next:focus {
    color: #fff;
    background: rgba(4, 4, 4, 0.6);
  }
`;

const PrevBtn = styled(LeftOutlined)`
  && {
    left: 0;

    ${arrowStyling}

    ${props => props.theme.breakpoints.lg} {
      ${arrowStylingLaptop}
    }
  }
`;

const NextBtn = styled(RightOutlined)`
  && {
    right: 0;

    ${arrowStyling}

    ${props => props.theme.breakpoints.lg} {
      ${arrowStylingLaptop}
    }
  }
`;

export default {
  Row,
  Root,
  Container,
  EventDetails,
  Heading,
  SubHeading,
  TimeBox,
  Time,
  EventLiveContainer,
  EventLive,
  Btn,
  LiveIcon,
  Slides,
  PrevBtn,
  NextBtn,
};
