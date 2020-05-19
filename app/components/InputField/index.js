/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled from './style';

function InputField({
  type,
  placeholder,
}) {
  return (
    <Styled.Root>
      <Styled.Field
        type={type}
        placeholder={placeholder}
      />
    </Styled.Root>
  )
}

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
