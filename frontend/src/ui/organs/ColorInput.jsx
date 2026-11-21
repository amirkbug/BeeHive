import OnlyColorBackground from "../atoms/OnlyColorBackground";
import InputContainer from "../molecules/InputContainer";

import { useThemeContext } from "../../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { backgroundChange } from "../../features/settings/settingsSlice";

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
}) {
  const { selectedTypeInverse } = useThemeContext();
  const { userBackgroundColor } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  function handleSelectedColor(color) {
    dispatch(backgroundChange(color));
  }

  return (
    <div className={baseClasses.div}>
      <OnlyColorBackground
        token={token}
        selectedColor={userBackgroundColor}
        setSelectedColor={handleSelectedColor}
      />

      <InputContainer token={token} type={selectedTypeInverse}>
        <InputContainer.InputTxt>{title}</InputContainer.InputTxt>

        <InputContainer.Input
          value={userBackgroundColor}
          onChange={(e) => handleSelectedColor(e.target.value)}
          LeftIcon={null}
          placeholderText={inputPlaceholderText}
        />

        <InputContainer.InputTxt isCaption>{subTitle}</InputContainer.InputTxt>
      </InputContainer>
    </div>
  );
}

export default ColorInput;
