import FormContainer from "../../../ui/organs/FormContainer";
import Buttons from "./Buttons";
import Inputs from "./Inputs";
import UserProfile from "../../../ui/atoms/UserProfile";

import { useThemeContext } from "../../../contexts/ThemeContext";

const baseClasses = {
  button: `
  self-center
  `,
};

function UserLogoPreview() {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <FormContainer type={selectedTypeInverse}>
      <FormContainer.OpenButton opens="userLogoPreview">
        <button className={baseClasses.button}>
          <UserProfile token="lg" />
        </button>
      </FormContainer.OpenButton>
      <FormContainer.Overlay />
      <FormContainer.Window name="userLogoPreview">
        <Buttons />
        <Inputs />
      </FormContainer.Window>
    </FormContainer>
  );
}

export default UserLogoPreview;
