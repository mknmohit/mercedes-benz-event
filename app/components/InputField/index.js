/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled from './style';

function InputField({ type, placeholder, value, onChange, name, maxLength }) {
  return (
    <Styled.Root>
      <Styled.Field
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        allowClear
      />
    </Styled.Root>
  );
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

export default InputField;
