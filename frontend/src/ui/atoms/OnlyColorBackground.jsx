import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useThemeContext } from "../../contexts/ThemeContext";

const tokens = {
  sm: "size-12",
  md: "size-13",
  lg: "size-14",
};

const baseClasses = {
  wrapper: `
    relative
    inline-flex
    shrink-0
  `,

  button: `
    rounded-full
    ring-1 ring-primary-300
    cursor-pointer
    transition-all
    hover:shadow-300-BoxShadowM
  `,

  picker: `
    absolute
    top-full
    left-0
    z-50
    mt-10
    rounded-xl
    p-3
    shadow-lg
    transition-all
  `,
};

function OnlyColorBackground({ token = "md", selectedColor, onColorChange }) {
  const { type } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  const selectedToken = tokens[token] ?? tokens.md;
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div ref={ref} className={baseClasses.wrapper}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`
          ${baseClasses.button}
          ${selectedToken}
        `}
        style={{ backgroundColor: selectedColor }}
        aria-label="Choose background color"
        aria-expanded={isOpen}
      />

      <div
        className={`
          custom-color-picker
          ${baseClasses.picker}
          ${type === "primary" ? "bg-secondary-500" : "bg-primary-100"}
          ${
          isOpen
          ? "opacity-100 pointer-events-auto"
          : "pointer-events-none opacity-0"
          }
        `}
      >
        <HexColorPicker color={selectedColor} onChange={onColorChange} />
      </div>
    </div>
  );
}

export default OnlyColorBackground;
