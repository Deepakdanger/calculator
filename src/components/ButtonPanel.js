import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const renderButton = (i, appClick) => (
  <Button
    value={i}
    onClick={() => appClick(i)}
  />
);

const ButtonPanel = ({ appClick }) => {
  const squares = ['AC', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-',
    '1', '2', '3', '+', '0', '.', '='];
  return (
    <div>
      <div className="board-row">
        {renderButton(squares[0], appClick)}
        {renderButton(squares[1], appClick)}
        {renderButton(squares[2], appClick)}
        {renderButton(squares[3], appClick)}
      </div>
      <div className="board-row">
        {renderButton(squares[4], appClick)}
        {renderButton(squares[5], appClick)}
        {renderButton(squares[6], appClick)}
        {renderButton(squares[7], appClick)}
      </div>
      <div className="board-row">
        {renderButton(squares[8], appClick)}
        {renderButton(squares[9], appClick)}
        {renderButton(squares[10], appClick)}
        {renderButton(squares[11], appClick)}
      </div>
      <div className="board-row">
        {renderButton(squares[12], appClick)}
        {renderButton(squares[13], appClick)}
        {renderButton(squares[14], appClick)}
        {renderButton(squares[15], appClick)}
      </div>
      <div className="board-row">
        {renderButton(squares[16], appClick)}
        {renderButton(squares[17], appClick)}
        {renderButton(squares[18], appClick)}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  appClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
