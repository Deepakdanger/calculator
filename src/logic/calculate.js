import React from 'react';
import Operate from './operate';

function Calculate(total, next, operation, buttonName) {
  const symbol = ['+', '-', 'x', '÷', '%'];
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  if (buttonName == 'AC') {
    total = '';
    next = '';
    operation = '';
  } else if (number.includes(buttonName) && operation === '') {
    total += buttonName;
  } else if (number.includes(buttonName) && operation !== '') {
    next += buttonName;
  } else if (symbol.includes(buttonName)) {
    operation = buttonName;
  } else if (buttonName == '=') {
    total = Operate(total, next, operation);
    next = '';
    operation = '';
  }

  return (total, next, operation);
}

export default Calculate;
