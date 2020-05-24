import styled from 'styled-components';

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: #cdcdcd;
  min-height: 35px;
  padding: 12px 30px;
  display: flex;
  align-items: center;
  width: 100%;

  ${props => props.theme.breakpoints.md} {
    padding-left: 46px;
  }
`;

const Label = styled.p`
  color: #272727;
  font-size: 14px;
  margin: 0;
`;

export default {
  Footer,
  Label,
};
