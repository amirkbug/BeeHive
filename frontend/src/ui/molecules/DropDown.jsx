import {
  cloneElement,
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { useGetElementPosition } from "../../hooks/useGetElementPosition";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { createPortal } from "react-dom";

//1)Create context
const DropDownButtonContext = createContext();

//Make the context throw and error when used outside of the bound
function useDropDownContext() {
  const context = useContext(DropDownButtonContext);

  if (!context) {
    throw new Error("You used DropDown context outside its Provider.");
  }
  return context;
}

//Object for diffrent variations
const tokens = {
  sm: {
    liClasses: "text-12px h-8",
  },
  md: {
    liClasses: "text-14px h-10",
  },
  lg: {
    liClasses: "text-16px h-12",
  },
};

const types = {
  primary: { ulType: "bg-secondary-500", liType: "text-primary-100" },
  secondary: { ulType: "bg-primary-100", liType: "text-secondary-500" },
};

//Base classes
const base = {
  liBase: `
  group
  flex flex-row
  items-center justify-start
  gap-1 cursor-pointer
  transition-all
  w-full
  hover:opacity-70
  `,
  ulBase: `
  flex flex-col
  items-center justify-end
  w-fit
  gap-2
  px-2 py-1
  z-50
  rounded-lg
  transition-all
  `,
};

//Mother function for storing key variables and provide them
function DropDown({ children, type = "primary", token = "sm" }) {
  const [openName, setOpenName] = useState(null);
  const [optionValue, setOptionValue] = useState(null);
  const [position, getPosition] = useGetElementPosition();

  //Error boundry
  const selectedType = types[type] ?? types.primary;
  const selectedToken = tokens[token] ?? tokens.sm;

  //Handle functions
  const open = setOpenName;

  function handleClose() {
    setOpenName(null);
  }

  return (
    <DropDownButtonContext.Provider
      value={{
        selectedToken,
        selectedType,
        open,
        openName,
        position,
        getPosition,
        handleClose,
        optionValue,
        setOptionValue,
        setOpenName,
      }}
    >
      {children}
    </DropDownButtonContext.Provider>
  );
}

//The function that responsible for showing the open button
function DropDownButton({ children, opens: dropDownUlName }) {
  const { getPosition, setOpenName, openName } = useDropDownContext();
  const buttonRef = useRef(null);
  const isOpen = openName === null ? false : true;

  function handleClick(e) {
    e.stopPropagation();
    setOpenName((prevName) =>
      prevName === dropDownUlName ? null : dropDownUlName,
    );
    getPosition(buttonRef.current);
  }

  return (
    <div
      onClick={handleClick}
      ref={buttonRef}
      className="
        w-fit
      "
    >
      {cloneElement(children, {
        disabled: isOpen,
      })}
    </div>
  );
}
//The function that responsible for showing the dropdown li
function DropDownLi({ children, value }) {
  //Use context
  const {
    selectedType,
    selectedToken,
    handleClose,
    optionValue,
    setOptionValue,
  } = useDropDownContext();

  function handleLiClick(value) {
    setOptionValue((prevValue) => (prevValue !== value ? value : prevValue));
    handleClose();
  }

  //component itself
  return (
    <li
      onClick={() => handleLiClick(value)}
      className={`
        ${optionValue === value ? "opacity-70" : ""}
        ${selectedType.liType}
        ${selectedToken.liClasses}
        ${base.liBase}
      `}
    >
      {children}
    </li>
  );
}
//The function that responsible for showing the dropdown ul
function DropDownUl({ children, name }) {
  //Use context
  const { selectedType, openName, position, handleClose } =
    useDropDownContext();

  //Handle functions
  const isOpen = name === openName;
  const ulRef = useOutsideClick(handleClose, true);

  //Component itself
  return createPortal(
    <ul
      ref={ulRef}
      id="dropDown"
      style={{
        position: "absolute",
        top: position && position.top + 8,
        left: position?.left,
      }}
      className={`
        shadow-accent-100 shadow-100
        ${
        isOpen
        ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
        : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
        }
        ${base.ulBase}
        ${selectedType.ulType}
      `}
    >
      {children}
    </ul>,
    document.body,
  );
}

DropDown.DropDownLi = DropDownLi;
DropDown.DropDownUl = DropDownUl;
DropDown.DropDownButton = DropDownButton;

export default DropDown;
