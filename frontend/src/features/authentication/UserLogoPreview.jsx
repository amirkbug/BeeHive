import FormContainer from "../../ui/organs/FormContainer";
import UserProfile from "../../ui/atoms/UserProfile";
import InputContainer from "../../ui/molecules/InputContainer";
import Button from "../../ui/molecules/Button";

import { LinkIcon, PenIcon } from "@solar-icons/react/linear";
import { UserCircleIcon, LetterIcon } from "@solar-icons/react/line-duotone";

function UserLogoPreview() {
  return (
    <FormContainer>
      <FormContainer.OpenButton opens="userLogoPreview">
        <button
          className="
            self-center
          "
        >
          <UserProfile token="lg" />
        </button>
      </FormContainer.OpenButton>
      <FormContainer.Overlay />
      <FormContainer.Window name="userLogoPreview">
        <div
          className="
            flex flex-row
            items-end justify-between
            gap-15
            px-4 py-7
            rounded-lg
            bg-linear-to-b
            from-primary-100 to-secondary-500
          "
        >
          <UserProfile token="xl" />
          <div
            className="
              flex flex-row
              justify-end
              gap-5
            "
          >
            <Button type="outline_secondary">
              Copy Link
              <LinkIcon size={18} />
            </Button>
            <Button type="outline_secondary">
              Edit Profile
              <PenIcon size={18} />
            </Button>
          </div>
        </div>
        <InputContainer token="sm" type="primary">
          <InputContainer.Input
            placeholderText="Your name"
            LeftIcon={UserCircleIcon}
            disabled
          />
        </InputContainer>
        <InputContainer token="sm" type="primary">
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
