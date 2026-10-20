import { HomeIcon } from "@solar-icons/react/linear/home";

//Objects for diffrent variations
const tokens = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
  lg: "h-14 w-14",
};

const types = {
  secondary: {
    button: "bg-primary-100 active:bg-primary-200",
    icon: "text-secondary-500 group-active:text-secondary-300",
  },
  primary: {
    button: "bg-secondary-500 active:bg-secondary-400",
    icon: "text-primary-100 group-active:text-primary-300",
  },
};

//Base style
const base =
  "group flex items-center inset-ring-0 justify-center gap-2.5 rounded-full cursor-pointer transition-all hover:shadow-300-BoxShadowM active:inset-ring-1 active:inset-ring-accent-100";

function FloatingButtons({
  className = "",
  token = "md",
  type = "primary",
  Icon = HomeIcon,
}) {
  //Error boundry
  const size = tokens[token] ?? tokens.md;
  const variant = types[type] ?? types.primary;

  //Component itself
  return (
    <button
      type="button"
      className={`
        ${base}
        ${size}
        ${variant.button}
        ${className}
      `}
    >
      <Icon
        size={20}
        className={`
          transition-colors
          ${variant.icon}
        `}
      />
    </button>
  );
}

export default FloatingButtons;
