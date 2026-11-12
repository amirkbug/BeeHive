import IconDoutone from "../../ui/atoms/IconDoutone";
import UserProfile from "../../ui/atoms/UserProfile";
import InputContainer from "../../ui/molecules/InputContainer";
import DropDown from "../../ui/molecules/DropDown";
import Button from "../../ui/molecules/Button";
import AnimatedIcon from "../../ui/atoms/AnimatedIcon";
import ColorInput from "../../ui/organs/ColorInput";

import {
  Pen2Icon,
  UserCircleIcon,
  LetterIcon,
  LockPasswordIcon,
  EyeClosedIcon,
} from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../contexts/ThemeContext";

const baseClasses = {
  form: `
  flex flex-col
  justify-start
  w-full h-full
  gap-10
  px-4
  pb-4
  `,

  div: `
  relative
  flex flex-col
  items-start
  w-full
  gap-2.5
  px-4 py-4
  rounded-lg
  bg-linear-to-b
  
  `,

  iconDoutone: `
  absolute
  bottom-0
  left-18
  cursor-pointer
  `,
};

function SettingsGeneral() {
  const { type, selectedTypeInverse } = useThemeContext();

  return (
    <form className={baseClasses.form}>
      <div
        className={`
          ${type === "primary" ? "from-[#E7D7B5] to-primary-100" : "from-[#E7D7B5] to-secondary-500"}
          ${baseClasses.div}
        `}
      >
        <UserProfile token="xl" />
        <IconDoutone
          type={type}
          className={baseClasses.iconDoutone}
          Icon={Pen2Icon}
          size={35}
        />
      </div>

      <InputContainer token="lg" type={selectedTypeInverse}>
        <InputContainer.Input
          LeftIcon={UserCircleIcon}
          placeholderText="Username"
        />
      </InputContainer>
      <InputContainer token="lg" type={selectedTypeInverse}>
        <InputContainer.Input
          LeftIcon={LetterIcon}
          placeholderText="Example : example@gmail.com"
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

      <ColorInput color="#DECEAE">
        <InputContainer token="lg" type={selectedTypeInverse}>
          <InputContainer.InputTxt>Background color</InputContainer.InputTxt>
          <InputContainer.Input LeftIcon={null} placeholderText="#DECEAE" />
          <InputContainer.InputTxt isCaption>
            Profile background color.
          </InputContainer.InputTxt>
        </InputContainer>
      </ColorInput>
    </form>
  );
}

export default SettingsGeneral;
