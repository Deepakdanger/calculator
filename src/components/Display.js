import React from 'react';
import PropTypes from 'prop-types';

function Display({ total }) {
  return (
    <div>
      {total || '0'}
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string,
};

Display.defaultProps = {
  total: '0',
};

export default Display;
