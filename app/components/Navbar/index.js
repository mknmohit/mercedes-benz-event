/**
 *
 * Navbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Tooltip } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { startCase } from 'lodash';

import Logo from 'images/logo.png';
import Styled from './style';

function Navbar({ isAuthenticated, onLogout, userData }) {
  const getMenu = () => (
    <Menu>
      <Menu.Item key="0">
        <Styled.Logout onClick={onLogout}>Logout</Styled.Logout>
      </Menu.Item>
    </Menu>
  );

  const renderAvatar = () => {
    if (isAuthenticated) {
      const { displayName } = userData;
      return (
        <Dropdown overlay={getMenu} trigger={['click']}>
          <Tooltip title={startCase(displayName)} placement="left">
            <Styled.User icon={<UserOutlined />} />
          </Tooltip>
        </Dropdown>
      );
    }
    return null;
  };

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
  userData: PropTypes.object,
};

export default Navbar;
