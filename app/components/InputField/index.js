/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled from './style';

function InputField({ type, placeholder, value, onChange }) {
  return (
    <Styled.Root>
      <Styled.Field
        type={type}
        placeholder={placeholder}
        allowClear
        value={value}
        onChange={onChange}
      />
    </Styled.Root>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default InputField;
