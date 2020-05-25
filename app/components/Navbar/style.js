import styled, { css } from 'styled-components';
import { Avatar } from 'antd';

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

  ${props => props.isAuthenticated && css`
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
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

const User = styled(Avatar)`

  ${props => props.theme.breakpoints.lg} {
    &&& {
      position: absolute;
      right: 12px;
      top: 10px;
      width: 42px;
      height: 42px;
      font-size: 20px;
      background-color: #000;
      z-index: 2;
    }
  }
`;

const Logout = styled.div`
  padding: 0 16px;
`;

export default {
  Nav,
  Logo,
  User,
  Logout,
};
