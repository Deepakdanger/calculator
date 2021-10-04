import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  const [state, setState] = useState({ total: '', next: '', operation: '' });
  const { total, next, operation } = state;

  const appClick = (buttonName) => {
    setState(calculate({ total, next, operation }, buttonName));
  };

  return (
    <>
      <Display total={total} next={next} />
      <ButtonPanel appClick={appClick} />
    </>
  );
}

export default App;
