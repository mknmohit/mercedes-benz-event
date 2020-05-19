import styled from 'styled-components';
import { Input } from 'antd';

const Root = styled.div`
  margin: 16px 0 42px;
  width: 100%;
  max-width: 425px;
`;

const Field = styled(Input)`
  && {
    height: 56px;
    border: 1px solid #c2c2c2;
    padding-left: 20px;
    font-size: 25px;
  }
`;

export default {
  Root,
  Field,
};
