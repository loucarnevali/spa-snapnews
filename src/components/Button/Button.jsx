import PropTypes from 'prop-types';
import { ButtonSpace } from './ButtonStyled';

export function Button({ type, text }) {
  return <ButtonSpace type={type}>{text}</ButtonSpace>;
}

// PropTypes Validation
Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
