import Line from "../atoms/Line";
import LogoComponent from "../atoms/Logo";
import ButtonComponent from "../molecules/Button";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { cloneElement, createContext, useContext, useState } from "react";

//1)Create context
const FormContext = createContext();

//Make the context throw and error when used outside of the bound
function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("You used form context out of the bound.");
  }
  return context;
}

//Objects for diffrent variations
const types = {
  primary: {
    txtColor: "text-primary-100",
    bgColor: "bg-secondary-500",
    articleClasses: "bg-secondary-500 text-primary-100",
    lineColor: "bg-primary-300",
  },
  secondary: {
    txtColor: "text-secondary-500",
    bgColor: "bg-primary-100",
    articleClasses: "bg-primary-100 text-secondary-500",
    lineColor: "bg-secondary-300",
  },
};

const sizes = {
  md: "w-143.25 h-103.75 p-12",
  lg: "w-143.25 h-139 px-12 py-8",
};

const baseClasses = {
  articleBaseClasses: `
  inset-ring-accent-100 inset-ring-1
  flex flex-col
  items-start justify-center
  gap-5
  p-5
  rounded-lg
  transition-all 
  z-30
  fixed left-1/2 top-1/2
  -translate-x-1/2 -translate-y-1/2
`,
  mainBaseClasses: `
    flex flex-col
    items-center justify-center
    rounded-2xl
    fixed left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
`,
  overlayBaseClasses: `
  fixed
  inset-0
  z-20
  bg-black/25
  backdrop-blur-xs
  transition-all`,
};

const shadows = {
  regular: "shadow-400-BoxShadowM",
  destructive: "shadow-200-destructure-BoxShadowM",
  success: "shadow-200-success-BoxShadowM",
};

//This is a hub for form component and modal component
function FormContainer({
  children,
  shadow = "regular",
  size = "lg",
  type = "primary",
}) {
  //Error boundry
  const selectedType = Object.hasOwn(types, type) ? type : "primary";
  const selectedSize = sizes[size] ?? sizes.lg;
  const selectedShadow = shadows[shadow] ?? shadows.regular;

  //States and handle functions
  const [openName, setOpenName] = useState(null);

  const close = () => setOpenName(null);

  const open = setOpenName;

  //Component itself
  return (
    <FormContext.Provider
      value={{
        selectedType,
        selectedSize,
        selectedShadow,
        close,
        open,
        openName,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

//Window that had the main content
function Window({ children, name }) {
  //Use context values
  const { selectedType, openName, close } = useFormContext();

  //States and variables
  const isOpen = name === openName;

  const ref = useOutsideClick(close);

  //Component itself
  return (
    <article
      ref={ref}
      className={`
        ${
        isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
        }
        ${baseClasses.articleBaseClasses}
        ${types[selectedType].articleClasses}
      `}
    >
      {children}
    </article>
  );
}

//Form component responsible for showing the form
function Form({ centered = false, children }) {
  const { selectedSize, selectedShadow, selectedType } = useFormContext();

  return (
    <main
      className={`
        ${selectedSize}
        ${baseClasses.mainBaseClasses}
        ${selectedShadow}
        ${types[selectedType].bgColor}
      `}
    >
      <form
        className={`
          flex flex-col
          justify-between
          w-full h-full
          ${centered ? "items-center" : ""}
        `}
      >
        {children}
      </form>
    </main>
  );
}

//Logo component responsible for the logo
function Logo({ emoji = null }) {
  const { selectedType } = useFormContext();

  return (
    <span
      className="
        flex flex-col
        items-center justify-center
      "
    >
      {emoji ? (
        <span
          className="
            text-8xl
          "
        >
          {emoji}
        </span>
      ) : (
        <LogoComponent
          token="xll"
          type={selectedType === "primary" ? "secondary" : "primary"}
          logoType={selectedType}
        />
      )}
    </span>
  );
}

//Title component shows the title of the form
function Title({ children }) {
  const { selectedType } = useFormContext();

  return (
    <h1
      className={`
        text-28px font-bold
        ${types[selectedType].txtColor}
      `}
    >
      {children}
    </h1>
  );
}

//Description for more information about the form
function Description({ children }) {
  const { selectedType } = useFormContext();
  return (
    <p
      className={`
        text-14px
        ${types[selectedType].txtColor}
      `}
    >
      {children}
    </p>
  );
}

//Button container for submit buttons
function Footer({ children, centered = false }) {
  return (
    <div
      className={`
        flex flex-row
        items-center justify-between
        w-full
        ${centered ? "justify-center" : "justify-between"}
      `}
    >
      {children}
    </div>
  );
}

//Button component talk for himself
function Button({ children, ...props }) {
  const { selectedType } = useFormContext();

  return (
    <ButtonComponent {...props} type={selectedType}>
      {children}
    </ButtonComponent>
  );
}

//We could have this in a seperate component but here we can have animations with it
function Overlay() {
  const { openName } = useFormContext();

  const isOpen = openName !== null;

  return (
    <div
      className={`
        ${baseClasses.overlayBaseClasses}
        ${
        isOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
        }
      `}
    />
  );
}

//We needed to clone the button so we could add open fn to it
function OpenButton({ children, opens: openWindowName }) {
  const { open } = useFormContext();

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

//We needed to clone the button so we could add close fn to it
function CloseButton({ children }) {
  const { close } = useFormContext();

  return cloneElement(children, { onClick: close });
}

//Header of modal
function Header({
  title = "Add New Data Source",
  description = "Connect a data source to BeeHive to import and sync your data automatically.",
}) {
  const { selectedType } = useFormContext();

  return (
    <header
      className="
        flex flex-col
        items-start justify-center
        w-full
        gap-1
      "
    >
      <h2
        className="
          w-full
          text-20px font-semibold
        "
      >
        {title}
      </h2>
      <Line
        className="
          opacity-50
        "
        orientation="vertical"
        color={types[selectedType].lineColor}
      />
      <p
        className="
          text-14px font-light
        "
      >
        {description}
      </p>
    </header>
  );
}

//Connecting the components with the names
//Diffrent types
FormContainer.Form = Form;
FormContainer.Window = Window;
//Header Component
FormContainer.Header = Header;
//Contents
FormContainer.Logo = Logo;
FormContainer.Overlay = Overlay;
FormContainer.Title = Title;
FormContainer.Description = Description;
//Footer that has the buttons in it
FormContainer.Footer = Footer;
//Diffrent types of buttons
FormContainer.Button = Button;
FormContainer.OpenButton = OpenButton;
FormContainer.CloseButton = CloseButton;

export default FormContainer;
