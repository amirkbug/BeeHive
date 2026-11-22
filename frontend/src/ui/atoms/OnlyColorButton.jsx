const tokens = {
  sm: "size-12",
  md: "size-13",
  lg: "size-14",
};

const baseClasses = {
  button: `
    rounded-full
    ring-1 ring-primary-300
    cursor-pointer
    transition-all
    hover:shadow-300-BoxShadowM
  `,
};

function OnlyColorButton({ token, selectedColor, setIsOpen }) {
  const selectedToken = tokens[token] ?? tokens.md;
  return (
    <button
      type="button"
      onClick={() => setIsOpen((open) => !open)}
      className={`
        ${baseClasses.button}
        ${selectedToken}
      `}
      style={{ backgroundColor: selectedColor }}
    />
  );
}

export default OnlyColorButton;
