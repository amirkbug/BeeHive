import OnlyColorInput from "../molecules/OnlyColorInput";
import InputContainer from "../molecules/InputContainer";

import { useThemeContext } from "../../contexts/ThemeContext";
import { hexToHsva, hsvaToRgbaString, rgbaToHexa } from "@uiw/react-color";
const baseClasses = {
  div: `
    flex flex-row
    items-center justify-center
    w-full
    gap-2
  `,
};

function ColorInput({
  inputPlaceholderText = "#DECEAE",
  title = "Background color",
  subTitle = "Profile background color.",
  token = "sm",
  onColorChange,
  selectedColor = "#DEC9AE",
}) {
  const { selectedTypeInverse } = useThemeContext();

  //Change the color that comes from user to hexa
  const hex = selectedColor.startsWith("#")
    ? selectedColor
    : (() => {
        const [r, g, b, a] = selectedColor
          .replace(/rgba?\(|\)/g, "")
          .split(",")
          .map(Number);

        return rgbaToHexa({ r, g, b, a });
      })();

  //Function for input onchange
  function handleHexChange(e) {
    const value = e.target.value;

    if (!/^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(value)) {
      return;
    }

    const hsva = hexToHsva(value);

    onColorChange(hsvaToRgbaString(hsva));
  }

  return (
    <div className={baseClasses.div}>
      <OnlyColorInput
        token={token}
        selectedColor={selectedColor}
        onColorChange={onColorChange}
      />

      <InputContainer token={token} type={selectedTypeInverse}>
        <InputContainer.InputTxt>{title}</InputContainer.InputTxt>

        <InputContainer.Input
          value={hex}
          onChange={handleHexChange}
          LeftIcon={null}
          placeholderText={inputPlaceholderText}
        />

        <InputContainer.InputTxt isCaption>{subTitle}</InputContainer.InputTxt>
      </InputContainer>
    </div>
  );
}

export default ColorInput;
