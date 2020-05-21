import styled from 'styled-components';
import slidesBg from 'images/slide-bg.png';
import Slider from 'react-slick';
import { Button } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

const commonStyling = `
  background-color: #000;
  color: #FFF4F4;
  display: flex;
  align-items: center;
  font-size: 24px;
`;

const arrowStyling = `
  font-size: 30px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  color: #fff;
  background: rgba(4, 4, 4, 0.6);
  z-index: 1;
`;

const Root = styled.div`
  height: 100%;
  min-height: 100vh;
  background-image: url(${slidesBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const EventDetails = styled.div`
  padding-top: 50px;
`;

const Heading = styled.h1`
  font-size: 30px;
  margin-bottom: 0;
  line-height: 1;
`;

const SubHeading = styled.h3`
  font-size: 18px;
`;

const TimeBox = styled.div`
  ${commonStyling}
  padding: 10px 36px 10px 20px;
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
  padding: 10px 16px;
`;

const Btn = styled(Button)`
  && {
    color: #fff4f4;
    font-size: 25px;
    padding: 12px 40px;
    height: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4cace9;
  }
`;

const Slides = styled(Slider)`
  .slick-dots {
    bottom: 0;
    margin-top: 16px;
    position: relative;

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
    top: 30%;

    ${arrowStyling}
  }
`;

const NextBtn = styled(RightOutlined)`
  && {
    right: 0;
    top: 30%;

    ${arrowStyling}
  }
`;

export default {
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
  Slides,
  PrevBtn,
  NextBtn,
};
