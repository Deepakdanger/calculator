import React from 'react';
import PropTypes from 'prop-types';

function Display({ data }) {
  return (
    <div>
      {data || '0'}
    </div>
  );
}

Display.propTypes = {
  data: PropTypes.string,
};

Display.defaultProps = {
  data: '0',
};

export default Display;
