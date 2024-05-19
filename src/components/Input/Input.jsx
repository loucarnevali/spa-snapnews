import PropTypes from 'prop-types';
import { InputSpace, TextareaSpace } from './InputStyled';
import { useState } from 'react';

export default function Input({
  type,
  placeholder,
  name,
  register,
  isInput = true,
  value: initialValue,
  disabled,
}) {
  const [value, setValue] = useState(
    initialValue !== undefined ? initialValue : '',
  );

  let inputProps = {
    type,
    placeholder,
    ...register(name),
    onChange: (e) => setValue(e.target.value),
    disabled,
  };

  if (value) inputProps.value = value;

  return (
    <>
      {isInput ? (
        <InputSpace {...inputProps} />
      ) : (
        <TextareaSpace {...inputProps} />
      )}
    </>
  );
}

// PropTypes Validation
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  isInput: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
};
