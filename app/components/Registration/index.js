/**
 *
 * Registration
 *
 */

import React, { useState } from 'react';
import { Row, Col } from 'antd';

import CarImg from 'images/reg.jpg';
import InputField from 'components/InputField';
import Button from 'components/Button';
import { RightOutlined } from '@ant-design/icons';

import Styled from './style';

function Registration() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    checkbox: true,
  });

  const handleRegister = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 15000);
  };

  const handleInputChange = () => {
    setFormData({
      name: '',
      mobile: '',
      checkbox: true,
    });
  };

  return (
    <Row>
      <Col xs={24} lg={16}>
        <img src={CarImg} alt="car" />
      </Col>
      <Col xs={24} lg={8}>
        <Styled.Container>
          <Styled.Heading>Register Yourself</Styled.Heading>
          <InputField
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <InputField
            type="text"
            name="mobile"
            placeholder="Enter mobile no."
            value={formData.mobile}
            onChange={handleInputChange}
          />
          <Styled.Checkbox checked={formData.checkbox}>
            I accept all{' '}
            <Styled.Anchor href="#">terms &amp; condition</Styled.Anchor>
          </Styled.Checkbox>
          <Styled.BtnWrapper>
            <Button
              justify="space-between"
              fontSize={24}
              loading={isLoading}
              onClick={handleRegister}
            >
              <>
                <span>Register</span>
                <RightOutlined />
              </>
            </Button>
          </Styled.BtnWrapper>
        </Styled.Container>
      </Col>
    </Row>
  );
}

export default Registration;
