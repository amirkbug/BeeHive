import FormContainer from "../../ui/organs/FormContainer";
import UserProfile from "../../ui/atoms/UserProfile";
import InputContainer from "../../ui/molecules/InputContainer";
import Button from "../../ui/molecules/Button";

import { LinkIcon, PenIcon } from "@solar-icons/react/linear";
import { UserCircleIcon, LetterIcon } from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../contexts/ThemeContext";

const baseClasses = {
  button: `
  self-center
  `,

  div: `
  flex flex-row
  items-end justify-between
  gap-15
  px-4 py-7
  rounded-lg
  bg-linear-to-b
  `,

  secondDiv: `
  flex flex-row
  justify-end
  gap-5
  `,
};

function UserLogoPreview() {
  const { type, selectedTypeInverse } = useThemeContext();

  const gradientColor = `${type === "secondary" ? "from-primary-100 to-secondary-500" : "from-secondary-500 to-primary-100"}`;

  return (
    <FormContainer type={selectedTypeInverse}>
      <FormContainer.OpenButton opens="userLogoPreview">
        <button className={baseClasses.button}>
          <UserProfile token="lg" />
        </button>
      </FormContainer.OpenButton>
      <FormContainer.Overlay />
      <FormContainer.Window name="userLogoPreview">
        <div
          className={`
            ${baseClasses.div}
            ${gradientColor}
          `}
        >
          <UserProfile token="xl" />
          <div
            className={`
              ${baseClasses.secondDiv}
            `}
          >
            <Button type={`outline_${type}`}>
              Copy Link
              <LinkIcon size={18} />
            </Button>
            <Button type={`outline_${type}`}>
              Edit Profile
              <PenIcon size={18} />
            </Button>
          </div>
        </div>
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
      </FormContainer.Window>
    </FormContainer>
  );
}

export default UserLogoPreview;
