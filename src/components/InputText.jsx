import { useState } from 'react';
import { BasicIcon } from './BasicIcons';

const InputText = ({ title, placeholder }) => {
  const [input, setInput] = useState('');

  const handleChange = (value) => {
    setInput(() => value);
  };

  const handleClick = () => {
    setInput('');
  };

  return (
    <div className="relative">
      <input
        className="w-full rounded-3xl border-0 bg-whisper-50 p-4 pt-9 text-t-subsection caret-lime-400 outline-none placeholder:text-mono-300 hover:bg-whisper-100 focus:bg-whisper-200"
        type="text"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      />
      <div className="absolute left-4 top-4 text-t-default text-whisper-900">
        {title}
      </div>
      <div
        onClick={handleClick}
        className="absolute right-4 top-0 flex h-full flex-1 items-center"
      >
        {input ? (
          <BasicIcon
            type="basicCross"
            style="size-6 fill-none stroke-m stroke-whisper-900 opacity-50"
          />
        ) : null}
      </div>
    </div>
  );
};

export { InputText };
