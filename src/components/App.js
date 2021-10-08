import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import Navbar from '../navbar';

function App() {
  const [state, setState] = useState({ total: '', next: '', operation: '' });
  const { total, next, operation } = state;

  const appClick = (buttonName) => {
    setState(calculate({ total, next, operation }, buttonName));
  };

  return (
    <>
      <Navbar />
      <Display total={total} />
      <ButtonPanel appClick={appClick} />
    </>
  );
}

export default App;
