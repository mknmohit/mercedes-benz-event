import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Root = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 115px);
  background-color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${props => props.theme.breakpoints.lg} {
    min-height: calc(100vh - 44px);
  }
`;

const ProductLaunch = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;

  ${props => props.theme.breakpoints.lg} {
    display: none;
  }
`;

const EventDetails = styled.div`
  padding-top: 20px;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 0;
  line-height: 1;
  color: #fff4f4;
`;

const SubHeading = styled.h3`
  font-size: 14px;
  color: #fff4f4;
`;

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: 20px;

  ${props => props.theme.breakpoints.lg} {
    max-width: 60%;
    margin-top: 50px;
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  border: 4px solid #fff4f4;
  padding-top: 56.25%;

  ${props => props.theme.breakpoints.lg} {
    padding-top: 0;
    height: 70vh;
  }
`;

const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;

  ${props => props.theme.breakpoints.lg} {
    flex-direction: row;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CaptureInfo = styled.div`
  color: #fff4f4;
  font-size: 18px;
  margin-right: 16px;

  ${props => props.theme.breakpoints.lg} {
    display: none;
  }
`;

const Btn = styled.a`
  && {
    color: #fff4f4;
    font-size: 18px;
    padding: 6px 16px;
    height: 100%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #4cace9;

    ${props => props.theme.breakpoints.lg} {
      font-size: 22px;
      padding: 8px 16px;
    }
  }
`;

const BtnImg = styled.img`
  max-width: 26px;
  margin-right: 16px;

  ${props => props.theme.breakpoints.lg} {
    max-width: 30px;
  }
`;

const TalkBox = styled.div`
  color: #fff4f4;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme.breakpoints.lg} {
    font-size: 22px;
  }
`;

const TalkInfo = styled.span`
  margin-right: 16px;
`;

const Hr = styled.div`
  height: 1px;
  background-color: #4b4b4b;
  opacity: 0.6;
  margin: 12vh 16px;

  ${props => props.theme.breakpoints.lg} {
    display: none;
  }
`;

export default {
  Root,
  ProductLaunch,
  EventDetails,
  Heading,
  SubHeading,
  Container,
  PlayerWrapper,
  Player,
  Content,
  BtnWrapper,
  CaptureInfo,
  Btn,
  BtnImg,
  TalkBox,
  TalkInfo,
  Hr,
};
