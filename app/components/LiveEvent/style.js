import styled from 'styled-components';
import ReactPlayer from 'react-player';

const Root = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 68%;
  border: 4px solid #fff;
  margin-top: 50px;
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  ${props => props.theme.breakpoints.lg} {
    padding-top: 0;  
    height: 80vh;
  }
`;

const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  
  && .player {
    border: 5px solid black;
  }

`;

export default {
  Root,
  Container,
  PlayerWrapper,
  Player,
};
