import styled from 'styled-components';
import { Button } from 'antd';

const Btn = styled(Button)`
  && {
    height: 100%;
    min-height: 60px;
    padding: 12px 24px;
    background-color: #4cace9;
    min-width: 270px;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    font-size: ${props => props.fontSize}px;
  }

  .ant-btn-loading-icon {
    display: flex;
    align-items: center;
  }
`;

export default {
  Btn,
};
