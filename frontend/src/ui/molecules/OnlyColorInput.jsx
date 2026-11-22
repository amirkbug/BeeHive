import ColorPicker from "./ColorPicker";
import OnlyColorButton from "../atoms/OnlyColorButton";

import { useThemeContext } from "../../contexts/ThemeContext";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useState } from "react";

const baseClasses = {
  wrapper: `
    relative
    inline-flex
    shrink-0
  `,
};

function OnlyColorBackground({ token = "md", selectedColor, onColorChange }) {
  const { type } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div ref={ref} className={baseClasses.wrapper}>
      <OnlyColorButton
        setIsOpen={setIsOpen}
        token={token}
        selectedColor={selectedColor}
      />

      <ColorPicker
        onColorChange={onColorChange}
        type={type}
        selectedColor={selectedColor}
        className={`
          transition-all duration-200 ease-out
          ${
          isOpen
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      />
    </div>
  );
}

export default OnlyColorBackground;
