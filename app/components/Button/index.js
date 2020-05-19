/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled from './style';

function Button({ children, type, size, justify, fontSize, loading, onClick }) {
  return (
    <Styled.Btn
      type={type}
      size={size}
      justify={justify}
      fontSize={fontSize}
      loading={loading}
      onClick={onClick}
    >
      {children}
    </Styled.Btn>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  size: PropTypes.string,
  justify: PropTypes.string,
  fontSize: PropTypes.number,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'primary',
  size: 'large',
  justify: 'center',
  fontSize: 20,
};

export default Button;
