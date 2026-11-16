import InputContainer from "../../../ui/molecules/InputContainer";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { UserCircleIcon, LetterIcon } from "@solar-icons/react/line-duotone";

function Inputs() {
  const { selectedTypeInverse } = useThemeContext();
  return (
    <>
      <InputContainer token="sm" type={selectedTypeInverse}>
        <InputContainer.Input
          placeholderText="Your name"
          LeftIcon={UserCircleIcon}
          disabled
        />
      </InputContainer>
      <InputContainer token="sm" type={selectedTypeInverse}>
        <InputContainer.Input
          placeholderText="Your email"
          LeftIcon={LetterIcon}
          disabled
        />
      </InputContainer>
    </>
  );
}

export default Inputs;
