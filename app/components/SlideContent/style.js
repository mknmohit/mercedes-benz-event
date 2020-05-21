import styled from 'styled-components';
import CarPeddle from 'images/peddle.png';

const SlideImg = styled.img`
  display: flex;
  margin: auto;

  ${props => props.theme.breakpoints.md} {
    width: calc(100% - 350px);
  }
`;

const ModelName = styled.div`
  background-color: #000;
  color: #fff4f4;
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  padding: 12px 46px;
`;

const PeddleContainer = styled.div`
  display: flex;
  padding-bottom: 46px;
`;

const PeddleInfo = styled.div`
  color: #fff4f4;
  font-size: 24px;
  padding: 16px 66px 16px 46px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4cace9;
`;

const Peddle = styled.div`
  width: 130px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
`;

const PeddleImg = styled.div`
  background-image: url(${CarPeddle});
  width: 100%;
  max-width: 90px;
  height: 130px;
  position: absolute;
  top: -25px;

  &:active {
    transform: perspective(50px) rotateX(5deg);
  }
`;

export default {
  SlideImg,
  ModelName,
  PeddleContainer,
  PeddleInfo,
  Peddle,
  PeddleImg,
};
