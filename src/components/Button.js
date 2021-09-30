import React from 'react';
import PropTypes from 'prop-types';

function Button({ value }, { onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
