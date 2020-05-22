/**
 *
 * Navbar
 *
 */

import React from 'react';
import Logo from 'images/logo.png';
import Styled from './style';

function Navbar() {
  return (
    <Styled.Nav>
      <a href="/">
        <Styled.Logo src={Logo} alt="logo" />
      </a>
    </Styled.Nav>
  );
}

export default Navbar;
