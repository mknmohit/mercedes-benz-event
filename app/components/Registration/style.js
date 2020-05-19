import styled from 'styled-components';
import { Checkbox as AntCheckbox } from 'antd';

const Heading = styled.h2`
  font-size: 42px;
  line-height: 47px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  padding: 42px 24px;

  ${props => props.theme.breakpoints.lg} {
    padding: 110px 42px;
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

const Anchor = styled.a`
  text-decoration: underline;
  color: #949494;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const BtnWrapper = styled.div`
  margin-top: 80px;
`;

export default {
  Container,
  Heading,
  Checkbox,
  Anchor,
  BtnWrapper,
};
