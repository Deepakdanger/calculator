import React from 'react';
import PropTypes from 'prop-types';

function Display({ data }) {
  return (
    <div>
      {data}
    </div>
  );
}

Display.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Display;
