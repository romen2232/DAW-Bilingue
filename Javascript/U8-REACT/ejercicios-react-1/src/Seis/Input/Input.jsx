import React from 'react';
import { useState } from 'react';

function Input({ OnKeyPress }) {
  const [input, setInput] = useState('');

  return (
    <input
      type='text'
      value={input}
      onChange={(e) => {
        setInput(e.target.value);
        OnKeyPress(e.target.value);
      }}
    />
  );
}

export default Input;
