import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function Calculator() {
  return (
    <div className="game-board">
      <div className="game-board1">
        <Display />
      </div>
      <div className="game-board1">
        <ButtonPanel />
      </div>
    </div>
  );
}

export default Calculator;
