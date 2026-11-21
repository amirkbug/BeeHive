import OnlyColorBackground from "../atoms/OnlyColorBackground";
import InputContainer from "../molecules/InputContainer";

import { useThemeContext } from "../../contexts/ThemeContext";
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

  return (
    <div className={baseClasses.div}>
      <OnlyColorBackground
        token={token}
        selectedColor={selectedColor}
        onColorChange={onColorChange}
      />

      <InputContainer token={token} type={selectedTypeInverse}>
        <InputContainer.InputTxt>{title}</InputContainer.InputTxt>

        <InputContainer.Input
          value={selectedColor}
          onChange={(e) => onColorChange(e.target.value)}
          LeftIcon={null}
          placeholderText={inputPlaceholderText}
        />

        <InputContainer.InputTxt isCaption>{subTitle}</InputContainer.InputTxt>
      </InputContainer>
    </div>
  );
}

export default ColorInput;
