import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';


const Root = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled(LoadingOutlined)`
  font-size: 34px;
  color: #4CACE9;
`;

export default {
  Root,
  Loader
};
