import calculate from '../logic/calculate';

describe('calculator logic', () => {
  it('return 0 if buttonName is equal to AC', () => {
    const calc = calculate({ total: 9, next: 4, operation: '+' }, 'AC');
    expect(calc).toHaveProperty('total');
    expect(calc.total).toEqual('');
    expect(calc.next).toEqual('');
    expect(calc.operation).toEqual('');
  });
});
