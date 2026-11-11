import Line from "../atoms/Line";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

//1)Create context
const ModalContext = createContext();

//Make the context throw and error when used outside of the bound
function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Modal components must be used within Modal.");
  }
  return context;
}

//Objects for difrent variations
const types = {
  primary: {
    articleClasses: "bg-secondary-500 text-primary-100",
    lineColor: "bg-primary-300",
  },
  secondary: {
    articleClasses: "bg-primary-100 text-secondary-500",
    lineColor: "bg-secondary-300",
  },
};

//Base classes
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

  overlayBaseClasses: `
  fixed
  inset-0
  z-20
  bg-black/25
  backdrop-blur-xs
  transition-all`,
};

//We had to seperate the modal from window so we could put button out of window but inside the modal
function Modal({ children, type = "primary" }) {
  //Error boundry
  const selectedType = Object.hasOwn(types, type) ? type : "primary";

  //States and handle functions
  const [openName, setOpenName] = useState(null);

  const close = () => setOpenName(null);

  const open = setOpenName;

  return createPortal(
    <ModalContext.Provider value={{ selectedType, open, close, openName }}>
      {children}
    </ModalContext.Provider>,
    document.body,
  );
}

//We could have this in a seperate component but here we can have animations with it
function Overlay() {
  const { openName } = useModalContext();

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

//Window that had the main content
function Window({ children, name }) {
  //Use context values
  const { selectedType, openName, close } = useModalContext();

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

//Header of modal
function Header({
  title = "Add New Data Source",
  description = "Connect a data source to BeeHive to import and sync your data automatically.",
}) {
  const { selectedType } = useModalContext();

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

//Footer of modal
function Footer({ children }) {
  return (
    <footer
      className="
        flex flex-row
        items-center justify-between
        w-full
      "
    >
      {children}
    </footer>
  );
}

//We needed to clone the button so we could add open fn to it
function OpenButton({ children, opens: openWindowName }) {
  const { open } = useModalContext();

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

//We needed to clone the button so we could add close fn to it
function CloseButton({ children }) {
  const { close } = useModalContext();

  return cloneElement(children, { onClick: close });
}

//Connecting the functions to main function
Modal.Window = Window;
Modal.Overlay = Overlay;
Modal.Header = Header;
Modal.OpenButton = OpenButton;
Modal.CloseButton = CloseButton;
Modal.Footer = Footer;

export default Modal;
