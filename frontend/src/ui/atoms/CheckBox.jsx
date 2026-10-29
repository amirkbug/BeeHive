import { MoonIcon, Sun2Icon } from "@solar-icons/react/linear";

//Objects for diffrent variations
const types = {
  primary: {
    containerClasses: "bg-secondary-500 has-checked:bg-accent-100",
    inputClasses:
      "bg-primary-100 hover:shadow-200-BoxShadowM checked:hover:shadow-200",
  },
  secondary: {
    containerClasses: "bg-primary-100 has-checked:bg-accent-100",
    inputClasses:
      "bg-secondary-500 hover:shadow-200-BoxShadowM checked:hover:shadow-200",
  },
  darkMode: {
    containerClasses:
      "bg-secondary-500 shadow-100-BoxShadowM hover:shadow-300-BoxShadowM has-checked:bg-primary-100",
    inputClasses: "bg-primary-100 shadow-200 checked:bg-secondary-500",
  },
};
const tokens = {
  sm: {
    conatainerSize: "h-5 w-9",
    thumbSize: "size-4",
    translateAmount: "checked:translate-x-4",
  },
  md: {
    conatainerSize: "h-6 w-11",
    thumbSize: "size-5",
    translateAmount: "checked:translate-x-5",
  },
  lg: {
    conatainerSize: "h-7 w-13",
    thumbSize: "size-6",
    translateAmount: "checked:translate-x-6",
  },
  darkMode: {
    conatainerSize: "h-6 w-11",
    thumbSize: "size-5",
    translateAmount: "checked:translate-x-5",
    iconProperties: {
      iconSize: 15,
      iconColor: {
        iconColorLight: "var(--color-primary-100)",
        iconColorDark: "var(--color-secondary-500)",
      },
    },
  },
};

//Base classes
const containerBase =
  "flex relative  flex-row items-center justify-between rounded-full p-0.5 transition-all";
const inputBase =
  " absolute cursor-pointer appearance-none rounded-full transition-all ";

function CheckBoxes({ type = "darkMode", token = "sm" }) {
  //Error boundry
  const isDarkMode = type === "darkMode";
  const selectedToken = isDarkMode
    ? tokens.darkMode
    : (tokens[token] ?? tokens.sm);

  const selectedType = types[type] ?? types.primary;

  //Component itself
  return (
    <div
      className={`
        ${containerBase}
        ${selectedType.containerClasses}
        ${selectedToken.conatainerSize}
      `}
    >
      {isDarkMode && (
        <Sun2Icon
          color={selectedToken.iconProperties.iconColor.iconColorDark}
          size={selectedToken.iconProperties.iconSize}
          className="
            pl-1
          "
        />
      )}

      <input
        type="checkbox"
        className={`
          ${inputBase}
          ${selectedType.inputClasses}
          ${selectedToken.thumbSize}
          ${selectedToken.translateAmount}
        `}
      />
      {isDarkMode && (
        <MoonIcon
          color={selectedToken.iconProperties.iconColor.iconColorLight}
          size={selectedToken.iconProperties.iconSize}
          className="
            pr-1
          "
        />
      )}
    </div>
  );
}

export default CheckBoxes;
