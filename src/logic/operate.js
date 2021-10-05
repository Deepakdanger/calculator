import Big from 'big.js';

const operate = (num1st, num2nd, operation) => {
  let num1 = new Big(num1st);
  let num2 = new Big(num2nd);
  if (operation === '+') {
    num2 = num2.plus(num1);
    num1 = num2;
  } else if (operation === '-') {
    num2 = num2.minus(num1);
    num1 = num2;
  } else if (operation === 'X') {
    num1 = num2.times(num1);
  } else if (operation === '/') {
    num2 = num2.div(num1);
    num1 = num2;
  }
  return num1.toString();
};

export default operate;
