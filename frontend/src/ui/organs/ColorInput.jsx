import { useThemeContext } from "../../contexts/ThemeContext";
import OnlyColorBackground from "../atoms/OnlyColorBackground";
import InputContainer from "../molecules/InputContainer";

//Base classes
const baseClasses = {
  div: `
  flex flex-row
  items-center justify-center
  w-full
  gap-2
  `,
};

function ColorInput({
  color = "#DECEAE",
  inputPlaceholderText = "#DECEAE",
  title = "Background color",
  subTitle = "Profile background color.",
  token = "sm",
}) {
  const { selectedTypeInverse } = useThemeContext();
  return (
    <div className={baseClasses.div}>
      <OnlyColorBackground token={token} color={color} />
      <InputContainer token={token} type={selectedTypeInverse}>
        <InputContainer.InputTxt>{title}</InputContainer.InputTxt>
        <InputContainer.Input
          LeftIcon={null}
          placeholderText={inputPlaceholderText}
        />
        <InputContainer.InputTxt isCaption>{subTitle}</InputContainer.InputTxt>
      </InputContainer>
    </div>
  );
}

export default ColorInput;
