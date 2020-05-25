/**
 *
 * Navbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import Logo from 'images/logo.png';
import Styled from './style';

function Navbar({ isAuthenticated, onLogout }) {

  const getMenu = () => (
    <Menu>
      <Menu.Item key="0">
        <Styled.Logout onClick={onLogout}>Logout</Styled.Logout>
      </Menu.Item>
    </Menu>
  )

  const renderAvatar = () => {
    if(isAuthenticated) {
      return (
        <Dropdown overlay={getMenu} trigger={['click']}>
          <Styled.User icon={<UserOutlined />}>Mohit</Styled.User>
        </Dropdown>
      )
    }
  }

  return (
    <Styled.Nav isAuthenticated={isAuthenticated}>
      <a href="/">
        <Styled.Logo src={Logo} alt="logo" />
      </a>
      {renderAvatar()}
    </Styled.Nav>
  );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func,
};

export default Navbar;
