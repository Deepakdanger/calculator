import React from 'react';
import PropTypes from 'prop-types';

function Display({ total }) {
  return (
    <div className="displayresult">
      <div className="result">
        {total || '0'}
      </div>
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
