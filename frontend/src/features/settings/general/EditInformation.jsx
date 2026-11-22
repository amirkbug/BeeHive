import IconDoutone from "../../../ui/atoms/IconDoutone";
import InputContainer from "../../../ui/molecules/InputContainer";

import {
  UserCircleIcon,
  LetterIcon,
  LockPasswordIcon,
  EyeClosedIcon,
} from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../../contexts/ThemeContext";
import EditBackgroundColor from "./EditBackgroundColor";
import EditProfile from "./EditProfile";

function EditInformation() {
  const { selectedTypeInverse } = useThemeContext();
  return (
    <>
      <EditProfile />
      <InputContainer token="lg" type={selectedTypeInverse}>
        <InputContainer.Input
          LeftIcon={UserCircleIcon}
          placeholderText="Username"
        />
      </InputContainer>
      <InputContainer token="lg" type={selectedTypeInverse}>
        <InputContainer.Input
          LeftIcon={LetterIcon}
          placeholderText="example@gmail.com"
        />
      </InputContainer>
      <InputContainer token="lg" type={selectedTypeInverse}>
        <InputContainer.Input
          LeftIcon={LockPasswordIcon}
          placeholderText="*******"
        >
          <InputContainer.InputRightContent>
            <IconDoutone
              Icon={EyeClosedIcon}
              type={selectedTypeInverse}
              size={20}
            />
          </InputContainer.InputRightContent>
        </InputContainer.Input>
      </InputContainer>
      <EditBackgroundColor />
    </>
  );
}

export default EditInformation;
