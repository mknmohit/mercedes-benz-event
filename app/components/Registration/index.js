/**
 *
 * Registration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, DatePicker } from 'antd';

import CarImg from 'images/reg.jpg'
import InputField from 'components/InputField';

import Styled from './style';

function Registration({ color }) {
  return (
    <Row>
      <Col xs={24} lg={16}>
        <img src={CarImg} alt="car"/>
      </Col>
      <Col xs={24} lg={8}>
        <Styled.Container>
          <Styled.Heading>Register Yourself</Styled.Heading>
          <InputField type="text" placeholder="Enter your name" />
          <InputField type="number" placeholder="Enter mobile no." />
        </Styled.Container>
      </Col>
    </Row>
  )

}

Registration.propTypes = {
  color: PropTypes.string,
};

export default Registration;
