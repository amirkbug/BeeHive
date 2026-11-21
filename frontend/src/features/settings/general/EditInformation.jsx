import IconDoutone from "../../../ui/atoms/IconDoutone";
import InputContainer from "../../../ui/molecules/InputContainer";
import DropDown from "../../../ui/molecules/DropDown";
import Button from "../../../ui/molecules/Button";
import AnimatedIcon from "../../../ui/atoms/AnimatedIcon";

import {
  UserCircleIcon,
  LetterIcon,
  LockPasswordIcon,
  EyeClosedIcon,
} from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../../contexts/ThemeContext";

function EditInformation() {
  const { type, selectedTypeInverse } = useThemeContext();
  return (
    <>
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

      <DropDown type={type}>
        <DropDown.DropDownButton opens="sync_frequency">
          <Button
            className="
              disabled:ring-1 disabled:ring-accent-100
            "
            type={selectedTypeInverse}
          >
            Sync Frequency
            <AnimatedIcon position="right" type={type} token="md" />
          </Button>
        </DropDown.DropDownButton>
        <DropDown.DropDownUl name="sync_frequency">
          <DropDown.DropDownLi value="every_15_minutes">
            ⏱️ Every 15 Minutes
          </DropDown.DropDownLi>
          <DropDown.DropDownLi value="every_hour">
            🕐 Every Hour
          </DropDown.DropDownLi>
          <DropDown.DropDownLi value="every_6_hours">
            🕕 Every 6 Hours
          </DropDown.DropDownLi>
          <DropDown.DropDownLi value="every_day">
            📅 Every Day
          </DropDown.DropDownLi>
        </DropDown.DropDownUl>
      </DropDown>
      <DropDown type={type}>
        <DropDown.DropDownButton opens="language">
          <Button
            className="
              disabled:ring-1 disabled:ring-accent-100
            "
            type={selectedTypeInverse}
          >
            Language
            <AnimatedIcon position="right" type={type} token="md" />
          </Button>
        </DropDown.DropDownButton>

        <DropDown.DropDownUl name="language">
          <DropDown.DropDownLi value="english">🇬🇧 English</DropDown.DropDownLi>
          <DropDown.DropDownLi value="french">🇫🇷 French</DropDown.DropDownLi>
          <DropDown.DropDownLi value="spanish">🇪🇸 Spanish</DropDown.DropDownLi>
        </DropDown.DropDownUl>
      </DropDown>
    </>
  );
}

export default EditInformation;
