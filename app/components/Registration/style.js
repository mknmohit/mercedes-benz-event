import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 42px;
  line-height: 47px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  padding: 110px 42px;

  ${props => props.theme.breakpoints.lg} {
    
  }
`;

export default {
  Container,
  Heading,
};
