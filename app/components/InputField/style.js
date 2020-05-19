import styled from 'styled-components';
import { Input } from 'antd';

const Root = styled.div`
  margin: 16px 0 24px;
  width: 100%;
  max-width: 425px;
`;

const Field = styled(Input)`
  height: 62px;
  border: 1px solid #c2c2c2;
`;

export default {
  Root,
  Field,
};
