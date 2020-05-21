import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const PolicyModal = styled(Modal)`
  && {
    top: 0;
  }

  .ant-modal-header {
    background-color: #000;
    padding: 30px 26px;
    min-height: 150px;
    height: 100%;
  }

  .ant-modal-title {
    font-family: 'CorporateACyr';
    font-size: 40px;
    color: #fff;
    line-height: 1;
    width: 100%;
    max-width: 300px;
  }

  .ant-modal-body {
    padding: 36px 26px;
    color: #949494;
    font-size: 16px;

    & p {
      margin-bottom: 26px;
    }
  }
`;

const CloseIcon = styled(CloseOutlined)`
  position: absolute;
  right: 30px;
  top: 50px;
  color: #fff;
  width: 46px;
  height: 46px;
  background-color: #4CACE9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
`;

export default {
  PolicyModal,
  CloseIcon,
};
