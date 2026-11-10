import IconDoutone from "../ui/atoms/IconDoutone";
import UserProfile from "../ui/atoms/UserProfile";
import InputContainer from "../ui/molecules/InputContainer";
import DropDown from "../ui/molecules/DropDown";
import Button from "../ui/molecules/Button";
import AnimatedIcon from "../ui/atoms/AnimatedIcon";
import ColorInput from "../ui/organs/ColorInput";

import {
  Pen2Icon,
  UserCircleIcon,
  LetterIcon,
  LockPasswordIcon,
  EyeClosedIcon,
} from "@solar-icons/react/line-duotone";
function SettingsGeneral() {
  return (
    <form
      className="
        flex flex-col
        justify-start
        w-full h-full
        gap-8
        px-4
        pb-4
      "
    >
      <div
        className="
          relative
          flex flex-col
          items-start
          w-full
          gap-2.5
          px-4 py-4
          rounded-lg
          bg-linear-to-b
          from-[#E7D7B5] to-primary-100
        "
      >
        <UserProfile token="xl" />
        <IconDoutone
          className="
            absolute
            bottom-0
            left-18
            cursor-pointer
          "
          Icon={Pen2Icon}
          size={35}
        />
      </div>

      <InputContainer token="lg" type="secondary">
        <InputContainer.Input
          LeftIcon={UserCircleIcon}
          placeholderText="Username"
        />
      </InputContainer>
      <InputContainer token="lg" type="secondary">
        <InputContainer.Input
          LeftIcon={LetterIcon}
          placeholderText="Example : example@gmail.com"
        />
      </InputContainer>
      <InputContainer token="lg" type="secondary">
        <InputContainer.Input
          LeftIcon={LockPasswordIcon}
          placeholderText="*******"
        >
          <InputContainer.InputRightContent>
            <IconDoutone Icon={EyeClosedIcon} type="secondary" size={20} />
          </InputContainer.InputRightContent>
        </InputContainer.Input>
      </InputContainer>
      <DropDown type="primary">
        <DropDown.DropDownButton opens="sync_frequency">
          <Button type="secondary">
            Sync Frequency
            <AnimatedIcon position="right" type="primary" token="md" />
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
      <DropDown type="primary">
        <DropDown.DropDownButton opens="language">
          <Button type="secondary">
            Language
            <AnimatedIcon position="right" type="primary" token="md" />
          </Button>
        </DropDown.DropDownButton>

        <DropDown.DropDownUl name="language">
          <DropDown.DropDownLi value="english">🇬🇧 English</DropDown.DropDownLi>
          <DropDown.DropDownLi value="french">🇫🇷 French</DropDown.DropDownLi>
          <DropDown.DropDownLi value="spanish">🇪🇸 Spanish</DropDown.DropDownLi>
        </DropDown.DropDownUl>
      </DropDown>

      <ColorInput color="#DECEAE">
        <InputContainer token="lg" type="secondary">
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
