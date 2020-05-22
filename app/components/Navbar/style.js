import styled from 'styled-components';

const Nav = styled.div`
  
  background-color: #000;
  width: 100%;
  height: 54px;
  line-height: 54px;
  display: block;
  text-align: center;
  position: relative;

  ${props => props.theme.breakpoints.lg} {
    height: 0;
  }
`;

const Logo = styled.img`
  width: 40px;

  ${props => props.theme.breakpoints.lg} {
    position: absolute;
    left: 40px;
    top: 24px;
    width: 54px;
    z-index: 2;
  }
`;

export default {
  Nav,
  Logo,
};
