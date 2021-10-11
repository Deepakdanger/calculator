/* eslint-disable no-unused-expressions */
import calculate from '../logic/calculate';

describe('calculator logic', () => {
  it('return 0 if buttonName is equal to AC', () => {
    const calc = calculate({ total: 9, next: 4, operation: '+' }, 'AC');
    expect(calc).toHaveProperty('total');
    expect(calc.total).toEqual('');
    expect(calc.next).toEqual('');
    expect(calc.operation).toEqual('');
  });

  it('add if operation is equal to +', () => {
    const calc = calculate({ total: 9, next: 4, operation: '+' }, '=');
    expect(calc).toHaveProperty('total');
    expect(calc.total === 14).toBeFalsy;
    expect(calc.total).toEqual('13');
  });

  it('subtract if operation is equal to -', () => {
    const calc = calculate({ total: 4, next: 9, operation: '-' }, '=');
    expect(calc).toHaveProperty('total');
    expect(calc.total).toEqual('5');
  });

  it('multiply if operation is equal to x', () => {
    const calc = calculate({ total: 9, next: 4, operation: 'X' }, '=');
    expect(calc).toHaveProperty('total');
    expect(calc.total === 65).toBeFalsy;
    expect(calc.total).toEqual('36');
  });

  it('divide if operation is equal to ÷', () => {
    const calc = calculate({ total: 3, next: 9, operation: '÷' }, '=');
    expect(calc).toHaveProperty('total');
    expect(calc.total).toEqual('3');
  });

  it('decimal add with adding 0. if calcult is less than 1', () => {
    const calc = calculate({ total: 0.5, next: 0.4, operation: '+' }, '=');
    expect(calc).toHaveProperty('total');
    expect(calc.total).toEqual('0.9');
  });

  it('When a . is clicked, and total is not null, operation is null and next is null, it returns a total 12.', () => {
    const calc = calculate({ total: '9', next: '', operation: '' }, '.');
    expect(calc).toHaveProperty('total');
    expect(calc.total).toEqual('9.');
  });

  it('make number negative when name is equal to +/-', () => {
    const calc = calculate({ total: 9, next: '', operation: '' }, '+/-');
    expect(calc).toHaveProperty('total');
    expect(calc.total).toEqual('-9');
  });

  it('do modulo with 100 when name is equal to %', () => {
    const calc = calculate({ total: 9, next: '', operation: '' }, '%');
    expect(calc).toHaveProperty('total');
    expect(calc.total).toEqual('0.09');
  });
});
