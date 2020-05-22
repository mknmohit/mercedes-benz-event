/**
 *
 * Footer
 *
 */

import React from 'react';
import Styled from './style';

function Footer() {

  const getCopyrightYear = () => {
    const date = new Date()
    return date.getFullYear()
  }
  return (
      <Styled.Footer>
        <Styled.Label>
          &copy; {getCopyrightYear()}. Mercedes-Benz India Pvt. Ltd. All Rights Reserved&nbsp;(provider)
        </Styled.Label>
      </Styled.Footer>
  )
}

export default Footer;
