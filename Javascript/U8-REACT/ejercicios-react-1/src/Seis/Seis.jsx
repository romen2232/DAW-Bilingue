import Input from './Input';
import { useState } from 'react';
import React from 'react';

function Seis() {
  const [input, setInput] = useState('');

  const changeH2 = (value) => {
    setInput(value);
  };
  return (
    <>
      <Input OnKeyPress={changeH2} />
      <h2>{input}</h2>
    </>
  );
}

export default Seis;
