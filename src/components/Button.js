import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value } = props;
  const { onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      {value}
    </button>
  );
}
Button.propTypes = {
  value: PropTypes.string.isRequired,
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
