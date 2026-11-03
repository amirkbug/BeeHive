import { LetterIcon } from "@solar-icons/react/linear";
import { createContext, useContext } from "react";

//1)Create context
const InputContext = createContext();

//Make the context throw and error when used outside of the bound
function useFormContext() {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error("You used form context out of the bound.");
  }
  return context;
}

//Object for diffrent variations
const types = {
  secondary: {
    containerClasses: `
    text-primary-100
    bg-secondary-500
  `,
    inputClasses: `
    text-primary-100
    placeholder:text-primary-100-alpha-60
    `,
    inputTxtClasses: `
    text-secondary-500
    `,
  },
  primary: {
    containerClasses: `
    text-secondary-500
    bg-primary-100
  `,
    inputClasses: `
    text-secondary-500
    placeholder:text-secondary-100-alpha-60
    `,
    inputTxtClasses: `
    text-primary-100
    `,
  },
};

const tokens = {
  sm: {
    iconSize: 16,
    inputHeight: "h-9",
    textSize: "text-12px",
  },
  md: {
    iconSize: 18,
    inputHeight: "h-10",
    textSize: "text-14px",
  },
  lg: {
    iconSize: 20,
    inputHeight: "h-11",
    textSize: "text-16px",
  },
};

//Base classes
const base = {
  containerClassesBase: `
  inset-ring-0
  flex flex-row
  items-center justify-between
  w-full min-w-0
  px-4 py-2
  rounded-lg
  transition-all
  has-focus:inset-ring-1 has-focus:inset-ring-accent-100
  hover:shadow-300-BoxShadowM
  `,
  inputClassesBase: `
  font-normal
  bg-transparent
  outline-none
  focus:outline-none
  appearance-none
  min-w-0 flex-1
  `,
  iconsDivClasses: `
  flex flex-row
  items-center
  gap-2
  font-light
  `,
  inputTxtbase: `
  flex flex-row
  items-center justify-start
  gap-2
`,
};

//Main Component
function InputContainer({
  type = "primary",
  token = "md",
  children,
  inputId = "test",
}) {
  //Error boundry
  const selectedType = Object.hasOwn(types, type) ? type : "primary";
  const selectedToken = Object.hasOwn(tokens, token) ? token : "md";

  return (
    <InputContext.Provider
      value={{ selectedToken, selectedType, tokens, types, inputId }}
    >
      <div
        className="
          flex flex-col
          w-full
          gap-2
        "
      >
        {children}
      </div>
    </InputContext.Provider>
  );
}

//Component for input
function Input({
  placeholderText = "",
  LeftIcon = LetterIcon,
  hasError = false,
  classNameMainContainer = "",
  children,
  ...inputProps
}) {
  //Use context
  const { tokens, selectedToken, selectedType, inputId } = useFormContext();

  return (
    <div
      className={`
        ${tokens[selectedToken].inputHeight}
        ${base.containerClassesBase}
        ${types[selectedType].containerClasses}
        ${classNameMainContainer}
        ${hasError ? "inset-ring-1 inset-ring-destructive-500" : ""}
      `}
    >
      <div
        className={`
          ${base.iconsDivClasses}
        `}
      >
        {LeftIcon && (
          <LeftIcon
            secondaryOpacity={1}
            secondaryColor="var(--color-accent-100)"
            size={tokens[selectedToken].iconSize}
          />
        )}
        <input
          id={inputId}
          type="text"
          placeholder={placeholderText}
          className={`
            ${base.inputClassesBase}
            ${types[selectedType].inputClasses}
            ${tokens[selectedToken].textSize}
          `}
          {...inputProps}
        />
      </div>
      {children}
    </div>
  );
}

//Right content in input component
function InputRightContent({ children }) {
  const { tokens, selectedToken } = useFormContext();

  return (
    <div
      className={`
        ${base.iconsDivClasses}
        ${tokens[selectedToken].textSize}
      `}
    >
      {children}
    </div>
  );
}

//Txtx above the input
function InputTxt({ isCaption = false, children }) {
  const { selectedToken, selectedType, inputId } = useFormContext();

  const Tag = isCaption ? "span" : "label";

  const tagProps = isCaption ? {} : { htmlFor: inputId };

  return (
    <Tag
      className={`
        ${base.inputTxtbase}
        ${tokens[selectedToken].textSize}
        ${types[selectedType].inputTxtClasses}
      `}
      {...tagProps}
    >
      {children}
    </Tag>
  );
}

//Connecting the components with the names
InputContainer.Input = Input;
InputContainer.InputRightContent = InputRightContent;
InputContainer.InputTxt = InputTxt;

export default InputContainer;
