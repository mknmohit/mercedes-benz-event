import styled from 'styled-components';
import { Checkbox as AntCheckbox, Button, Col } from 'antd';
import CarImg from 'images/reg.jpg';

const Column = styled(Col)`
  ${props => props.theme.breakpoints.lg} {
    height: 100%;
    min-height: 100vh;
  }
`;

const RegImg = styled.div`

  ${props => props.theme.breakpoints.lg} {
    background-image: url(${CarImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }
`;

const ImgMobile = styled.img`

  ${props => props.theme.breakpoints.lg} {
    display: none
  } 
`;

const Heading = styled.h2`
  font-size: 42px;
  line-height: 47px;
  margin-bottom: 42px;

  ${props => props.theme.breakpoints.lg} {
    margin-bottom: 50px;
  }
`;

const Container = styled.div`
  padding: 42px 24px;

  ${props => props.theme.breakpoints.lg} {
    padding: 90px 42px;
  }
`;

const Checkbox = styled(AntCheckbox)`
  && {
    color: #949494;
  }

  & > span {
    margin-right: 8px;
  }
`;

const PolicyBtn = styled(Button)`
  text-decoration: underline;
  color: #949494;
  padding-left: 0;

  &&:hover,
  &&:focus {
    text-decoration: underline;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 52px;

  ${props => props.theme.breakpoints.lg} {
    margin-top: 80px;
  }
`;

export default {
  Container,
  Heading,
  Checkbox,
  PolicyBtn,
  BtnWrapper,
  Column,
  RegImg,
  ImgMobile,
};
