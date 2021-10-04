import React from 'react';
import Button from './Button';
import Display from './Display';

function Calculate(total,next,operation, buttonName) {

  const symbol = ['+', '-', 'x', '÷', '%'];
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  if (buttonName== 'AC'){
    total='';
    next='';
    operation='';
  } else if (symbol.includes(buttonName)){
    
  }else if (number.includes(buttonName)){
    
  }

    

return (total,next,operation)
}

export default Calculate;