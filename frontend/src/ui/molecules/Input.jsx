import { HomeIcon } from "@solar-icons/react/linear/home";

//Object for diffrent variations
const types = {
  primary: {
    containerClasses: `
    text-primary-100
    bg-secondary-500
  `,
    ipnutClasses: `
    text-primary-100
    placeholder:text-primary-100-alpha-60
    `,
  },
  secondary: {
    containerClasses: `
    text-secondary-500
    bg-primary-100
  `,
    ipnutClasses: `
    text-secondary-500
    placeholder:text-secondary-100-alpha-60
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
  w-full
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
  `,
  iconsDivClasses: `
  flex flex-row
  items-center
  gap-2
  `,
};

//Component itself
function Input({
  type = "secondary",
  token = "md",
  classNameMainContainer = "",
  LeftIcon = HomeIcon,
  RightIcon = [HomeIcon, HomeIcon],
  rightTxt = "Add-ons",
  hasError = false,
  inputID,
}) {
  //Error boundry
  const selectedType = types[type] ?? types.secondary;
  const selectedToken = tokens[token] ?? tokens.md;

  //Component itself
  return (
    <div
      className={`
        ${selectedToken.inputHeight}
        ${base.containerClassesBase}
        ${classNameMainContainer}
        ${selectedType.containerClasses}
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
            size={tokens[token].iconSize}
          />
        )}
        <input
          id={inputID}
          type="text"
          placeholder="Write here ..."
          className={`
            ${base.inputClassesBase}
            ${selectedType.ipnutClasses}
            ${selectedToken.textSize}
          `}
        />
      </div>
      <div
        className={`
          ${base.iconsDivClasses}
        `}
      >
        <p
          className={`
            font-light
            ${selectedToken.textSize}
          `}
        >
          {rightTxt && rightTxt}
        </p>
        {RightIcon &&
          RightIcon.map((Icon, i) => (
            <Icon
              secondaryOpacity={1}
              secondaryColor="var(--color-accent-100)"
              key={i}
              size={selectedToken.iconSize}
            />
          ))}
      </div>
    </div>
  );
}

export default Input;
