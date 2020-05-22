/**
 *
 * Registration
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, message } from 'antd';
import { isEmpty, trim } from 'lodash';

import CarImg from 'images/reg.jpg';
import InputField from 'components/InputField';
import Button from 'components/Button';
import { RightOutlined } from '@ant-design/icons';

import PolicyModal from 'components/PolicyModal';
import Styled from './style';

function Registration({ onRegister }) {
  const [openPolicy, setOpenPolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    checkbox: false,
  });

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  }, []);

  const togglePolicyModal = () => {
    setOpenPolicy(!openPolicy)
  }

  const handlePolicyCheckbox = () => {
    setFormData({
      ...formData,
      checkbox: true,
    });
  }

  const validation = () => {
    const { name, mobile, checkbox } = formData;

    const isFiledsEmpty = isEmpty(name) || isEmpty(mobile) || !checkbox
    const isNameInvalid = name.length < 2
    const mobileRegix = new RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/)
    const isMobileValid = mobileRegix.test(mobile)

    if(isFiledsEmpty) {
      if(isEmpty(name) || isEmpty(mobile)) {
        message.error('Please fill all fields', 3)
      }
      else {
        message.error('Please Accept Terms & Conditions', 3)
      }
    } 
    else if (isNameInvalid) {
      message.error('Invalid Name', 3);
    }
    else if (!isMobileValid) {
      message.error('Invalid Mobile Number', 3)
    }
    return !isFiledsEmpty && !isNameInvalid && isMobileValid && checkbox
  }

  const handleRegister = () => {
    const { name, mobile } = formData;

    const isAllFieldsValid = validation();
    if (isAllFieldsValid) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 15000);

      const params = {
        name,
        mobile,
        email: `${name}${mobile}@dj.com`,
      };
      onRegister(params);
    }
  };

  const handleInputChange = event => {
    const {
      target: { name, value, checked, type },
    } = event;

    const updatedValue = type === 'checkbox' ? checked : trim(value);
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  return (
    <Row>
      <Styled.Column xs={24} lg={16}>
        <Styled.ImgMobile src={CarImg} alt="car" />
        <Styled.RegImg />
      </Styled.Column>
      <Styled.Column xs={24} lg={8}>
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
          <Styled.Checkbox
            checked={formData.checkbox}
            name="checkbox"
            onChange={handleInputChange}
          >
            I accept all{' '}
            <Styled.PolicyBtn type="link" onClick={togglePolicyModal}>terms &amp; condition</Styled.PolicyBtn>
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
          <PolicyModal isModalOpen={openPolicy} onClose={togglePolicyModal} onConfirm={handlePolicyCheckbox} />
        </Styled.Container>
      </Styled.Column>
    </Row>
  );
}

Registration.propTypes = {
  onRegister: PropTypes.func,
};

export default Registration;
