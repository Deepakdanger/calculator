import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  const [state, setState] = useState({ total: '' });
  const { total } = state;

  const appClick = (buttonName) => {
    setState({ total: buttonName });
  };

  return (
    <>
      <Display data={total} />
      <ButtonPanel appClick={appClick} />
    </>
  );
}

export default App;
