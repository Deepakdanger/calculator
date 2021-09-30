import React from 'react';

function Button(props) {
  return (
    <button type="button">
      {props.value}
    </button>
  );
}

export default Button;
