import PropTypes from 'prop-types';

export default function TextLimit({ text, limit }) {
  const textLimited =
    text?.length > limit ? `${text.substring(0, limit)}...` : text;

  return <p> {textLimited}</p>;
}

// PropTypes Validation
TextLimit.propTypes = {
  text: PropTypes.string,
  limit: PropTypes.number.isRequired,
};
