import { useState } from 'react';

const useInputText = () => {
  const [text, setText] = useState('');

  const handleInputChange = (value) => {
    setText(() => value);
  };

  const handleClear = () => {
    setText('');
  };

  return { text, handleInputChange, handleClear };
};

export { useInputText };
