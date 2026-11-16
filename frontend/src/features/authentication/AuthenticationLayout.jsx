import lightModeBackground from "../../assets/AuthenticationBackgrounds/lightModeBackground.jpeg";
import darkModeBackground from "../../assets/AuthenticationBackgrounds/darkModeBackground.jpeg";
import Logo from "../../ui/atoms/Logo";
import FormContainer from "../../ui/organs/FormContainer";
import InputContainer from "../../ui/molecules/InputContainer";

import { createContext, useContext, useReducer } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import {
  LetterIcon,
  LoginIcon,
  LockPasswordIcon,
  EyeClosedIcon,
  UserPlusIcon,
} from "@solar-icons/react/linear";
import { FaGithub } from "react-icons/fa";

const AuthenticationContext = createContext();

//Make the context throw and error when used outside of the bound
function useAuthenticationContext() {
  const context = useContext(AuthenticationContext);

  if (!context) {
    throw new Error("You used authentication context out of the bound.");
  }
  return context;
}

//Utility class for changing the visiablity of form
function getFormVisibility(activeForm, formName) {
  return activeForm === formName
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";
}

const baseClasses = {
  main: `
  relative
  flex flex-col
  items-center justify-center
  w-screen
  min-h-screen
  bg-cover bg-center bg-no-repeat
  before:absolute before:inset-0 
  `,

  div: `
  absolute
  inset-0
  transition-shadow
  pointer-events-none
  `,

  hoverLogoDiv: `
  transition-all
  relative
  z-10
  duration-500 ease-in-out
  `,

  overlayDiv: `
  absolute
  inset-0
  backdrop-blur-xs
  `,

  loginDiv: `
  transition-all
  `,

  textButtonButton: `
  self-start
  text-14px font-bold
  hover:underline
  cursor-pointer
  `,
};
//We decided to handle state with useReducer
const initialState = {
  isLogoHovered: false,
  activeForm: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "logo/hoverStart":
      return { ...state, isLogoHovered: true };

    case "logo/hoverEnd":
      return { ...state, isLogoHovered: false };

    case "form/setActive":
      return { ...state, activeForm: action.payload };

    default:
      throw new Error("Unknown action type.");
  }
}

function AuthenticationLayout({ children }) {
  const [{ isLogoHovered, activeForm }, dispatch] = useReducer(
    reducer,
    initialState,
  );
  const { type } = useThemeContext();

  const backgroundImageBaseOnCondition =
    type === "primary"
      ? `url(${lightModeBackground})`
      : `url(${darkModeBackground})`;

  function handleHideForm(e) {
    e.preventDefault();
    dispatch({ type: "form/setActive", payload: null });
  }

  function handleShowForm(formName) {
    dispatch({ type: "form/setActive", payload: formName });
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isLogoHovered,
        activeForm,
        dispatch,
        handleHideForm,
        handleShowForm,
        type,
      }}
    >
      <main
        style={{ backgroundImage: backgroundImageBaseOnCondition }}
        className={`
          ${baseClasses.main}
          ${type === "primary" ? "before:bg-white/50" : "before:bg-black/80"}
        `}
      >
        {children}
      </main>
    </AuthenticationContext.Provider>
  );
}

//This one has the job to change the page border to accent
function FrameRing() {
  const { isLogoHovered } = useAuthenticationContext();
  return (
    <div
      className={`
        ${baseClasses.div}
        ${
        isLogoHovered
        ? "shadow-[inset_0_0_40px_8px_rgba(242,180,28,0.25)]"
        : "shadow-[inset_0_0_0px_0px_rgba(242,180,28,0)]"
        }
      `}
    />
  );
}

//This is the component of logo in the middle of page
function HoverLogo() {
  const { dispatch, activeForm, type } = useAuthenticationContext();
  return (
    <button
      className={`
        ${baseClasses.hoverLogoDiv}
        ${activeForm !== null ? "-translate-y-50 opacity-0 pointer-events-none" : "opacity-100"}
      `}
      onClick={() => dispatch({ type: "form/setActive", payload: "login" })}
      onMouseEnter={() => dispatch({ type: "logo/hoverStart" })}
      onMouseLeave={() => dispatch({ type: "logo/hoverEnd" })}
    >
      <Logo type={type} logoType={type} token="xll" />
    </button>
  );
}

//Logo in top of the form
function ClickAbleLogo() {
  const { handleHideForm } = useAuthenticationContext();
  return (
    <button type="button" onClick={(e) => handleHideForm(e)}>
      <FormContainer.Logo />
    </button>
  );
}

//Overlay for background
function Overlay() {
  return <div className={baseClasses.overlayDiv} />;
}

//This is a local compnent for the texts that should change the form
function TextButton({ children, formType }) {
  const { handleShowForm, type } = useAuthenticationContext();
  return (
    <button
      type="button"
      onClick={() => handleShowForm(formType)}
      className={`
        ${baseClasses.textButtonButton}
        ${type === "primary" ? "text-primary-100" : "text-secondary-500"}
      `}
    >
      {children}
    </button>
  );
}

//Login form
function Login() {
  const { activeForm, type } = useAuthenticationContext();

  return (
    <div
      className={`
        ${baseClasses.loginDiv}
        ${getFormVisibility(activeForm, "login")}
      `}
    >
      <FormContainer type={type}>
        <FormContainer.Form>
          <ClickAbleLogo />
          <FormContainer.Title>Login</FormContainer.Title>
          <FormContainer.Description>
            You dont have an account?{" "}
            <TextButton formType="signup">Signup</TextButton>
            {"  "}
            here
          </FormContainer.Description>
          <InputContainer token="md" type={type}>
            <InputContainer.InputTxt>Gmail :</InputContainer.InputTxt>
            <InputContainer.Input placeholderText="Enter your email address"></InputContainer.Input>
          </InputContainer>
          <InputContainer token="md" type={type}>
            <InputContainer.InputTxt>Password :</InputContainer.InputTxt>
            <InputContainer.Input
              LeftIcon={LockPasswordIcon}
              placeholderText="*******"
            >
              <InputContainer.InputRightContent>
                <EyeClosedIcon size={18} />
              </InputContainer.InputRightContent>
            </InputContainer.Input>
          </InputContainer>

          <TextButton formType="forgotPassword">Forgot password?</TextButton>

          <FormContainer.Footer>
            <FormContainer.Button htmlType="submit">
              Submit
              <LoginIcon size={18} />
            </FormContainer.Button>
            <FormContainer.Button>
              Login with github
              <FaGithub size={18} />
            </FormContainer.Button>
          </FormContainer.Footer>
        </FormContainer.Form>
      </FormContainer>
    </div>
  );
}

//Signup form
function SignUp() {
  const { activeForm, type } = useAuthenticationContext();
  return (
    <div
      className={`
        ${baseClasses.loginDiv}
        ${getFormVisibility(activeForm, "signup")}
      `}
    >
      <FormContainer type={type}>
        <FormContainer.Form>
          <ClickAbleLogo />
          <FormContainer.Title>Sign up</FormContainer.Title>
          <FormContainer.Description>
            You have an account? <TextButton formType="login">Login</TextButton>{" "}
            here
          </FormContainer.Description>
          <InputContainer token="md" type={type}>
            <InputContainer.InputTxt>Gmail :</InputContainer.InputTxt>
            <InputContainer.Input placeholderText="Enter your email address"></InputContainer.Input>
          </InputContainer>

          <InputContainer token="md" type={type}>
            <InputContainer.InputTxt>Password :</InputContainer.InputTxt>
            <InputContainer.Input
              LeftIcon={LockPasswordIcon}
              placeholderText="*******"
            >
              <InputContainer.InputRightContent>
                <EyeClosedIcon size={18} />
              </InputContainer.InputRightContent>
            </InputContainer.Input>
          </InputContainer>
          <InputContainer token="md" type={type}>
            <InputContainer.InputTxt>
              Confirm password :
            </InputContainer.InputTxt>
            <InputContainer.Input
              LeftIcon={LockPasswordIcon}
              placeholderText="*******"
            >
              <InputContainer.InputRightContent>
                <EyeClosedIcon size={18} />
              </InputContainer.InputRightContent>
            </InputContainer.Input>
          </InputContainer>

          <FormContainer.Footer>
            <FormContainer.Button htmlType="submit">
              Join now
              <UserPlusIcon size={18} />
            </FormContainer.Button>
            <FormContainer.Button>
              Signup with github
              <FaGithub size={18} />
            </FormContainer.Button>
          </FormContainer.Footer>
        </FormContainer.Form>
      </FormContainer>
    </div>
  );
}

//Forgot pass form
function ForgotPassword() {
  const { activeForm, handleShowForm, type } = useAuthenticationContext();
  return (
    <div
      className={`
        ${baseClasses.loginDiv}
        ${getFormVisibility(activeForm, "forgotPassword")}
      `}
    >
      <FormContainer type={type}>
        <FormContainer.Form>
          <ClickAbleLogo />
          <FormContainer.Title>Forgot your password?</FormContainer.Title>
          <FormContainer.Description>
            Enter your email address and send you a link to reset your password.
          </FormContainer.Description>
          <InputContainer token="md" type={type}>
            <InputContainer.InputTxt>Gmail :</InputContainer.InputTxt>
            <InputContainer.Input
              LeftIcon={LetterIcon}
              placeholderText="Enter your email address"
            ></InputContainer.Input>
          </InputContainer>

          <FormContainer.Footer>
            <FormContainer.Button htmlType="submit">
              Send Reset Link
              <LetterIcon size={18} />
            </FormContainer.Button>
            <FormContainer.Button
              htmlType="button"
              onClick={(e) => {
                e.preventDefault();
                handleShowForm("login");
              }}
            >
              Remember your password? Login
              <LoginIcon size={18} />
            </FormContainer.Button>
          </FormContainer.Footer>
        </FormContainer.Form>
      </FormContainer>
    </div>
  );
}

AuthenticationLayout.FrameRing = FrameRing;
AuthenticationLayout.HoverLogo = HoverLogo;
AuthenticationLayout.Overlay = Overlay;

AuthenticationLayout.Login = Login;
AuthenticationLayout.SignUp = SignUp;
AuthenticationLayout.ForgotPassword = ForgotPassword;

export default AuthenticationLayout;
