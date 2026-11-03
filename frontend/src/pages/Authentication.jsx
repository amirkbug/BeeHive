import InputContainer from "../ui/molecules/InputContainer";
import FormContainer from "../ui/organs/FormContainer";
import { LetterIcon, LoginIcon, HomeIcon } from "@solar-icons/react/linear";

function Authentication() {
  return (
    <FormContainer type="primary">
      <FormContainer.Form>
        <FormContainer.Logo />
        <FormContainer.Title>Forgot your password?</FormContainer.Title>
        <FormContainer.Description>
          Enter your email address and we'll send you a link to reset your
          password.
        </FormContainer.Description>
        <InputContainer token="sm" type="secondary">
          <InputContainer.InputTxt>Gmail :</InputContainer.InputTxt>
          <InputContainer.Input placeholderText="Write here ...">
            <InputContainer.InputRightContent>
              <HomeIcon size={18} />
            </InputContainer.InputRightContent>
          </InputContainer.Input>
        </InputContainer>
        <InputContainer token="sm" type="secondary">
          <InputContainer.InputTxt>Gmail :</InputContainer.InputTxt>
          <InputContainer.Input placeholderText="Write here ...">
            <InputContainer.InputRightContent>
              <HomeIcon size={18} />
            </InputContainer.InputRightContent>
          </InputContainer.Input>
        </InputContainer>

        <FormContainer.Footer>
          <FormContainer.Button>
            Send Reset Link
            <LetterIcon size={18} />
          </FormContainer.Button>
          <FormContainer.Button>
            Remember your password? Login
            <LoginIcon size={18} />
          </FormContainer.Button>
        </FormContainer.Footer>
      </FormContainer.Form>
    </FormContainer>
  );
}

export default Authentication;
