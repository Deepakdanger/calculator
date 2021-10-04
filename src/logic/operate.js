import Big from 'big.js';

const operate = (total, next, operation) => {
  if (operation == '+') {
    total += next;
  } else if (operation == '-') {
    total -= next;
  } else if (operation == 'x') {
    total *= next;
  } else if (operation == '/') {
    total /= next;
  } else if (operation == '%') {
    total /= 100;
  }
  return total;
};

export default operate;
