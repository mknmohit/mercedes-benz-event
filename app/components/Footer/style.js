import styled from 'styled-components';

// const Wrapper = styled.div`
//   height: 66px;
//   // padding: 12px 30px;
//   width: 100%;
//   display: block;

//   ${props => props.theme.breakpoints.lg} {
//     height: 46px;
//   }
// `;

const Footer = styled.footer`
  flex-shrink: 0;
  background-color: #CDCDCD;
  min-height: 35px;
  padding: 12px 30px;
  display: flex;
  align-items: center;
  // position: fixed;
  // left: 0;
  // bottom: 0;
  width: 100%;

  ${props => props.theme.breakpoints.md} {
    padding-left: 46px;
    // position: static;
  }
`;

const Label = styled.p`
  color: #272727;
  font-size: 14px;
  margin: 0;
`;

export default {
  // Wrapper,
  Footer,
  Label,
};
