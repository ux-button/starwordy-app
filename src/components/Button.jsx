const Button = ({ children, type, size, width }) => {
  const buttonType = {
    primary: "bg-lime-400 hover:bg-lime-300 text-lime-950",
    secondary: "bg-white hover:bg-mono-50 text-black",
    tertary: "bg-whisper-50 hover:bg-whisper-200 text-whisper-900",
    shadow: "bg-transparent text-black hover:text-mono-950",
  };
  const buttonSize = {
    small: "py-1.5 px-3 text-t-default",
    main: "py-2 px-3 text-t-large",
    large: "py-4 px-6 text-t-body",
    xSize: "py-4 px-6 text-t-subsection",
  };
  const buttonWidth = {
    full: "w-full ite",
  };

  return (
    <button
      className={`${buttonType[type]} ${buttonSize[size]} ${buttonWidth[width]} flex justify-center gap-1.5 rounded-3xl font-stwSemibold`}
    >
      {children}
    </button>
  );
};

export { Button };
