import { HomeIcon } from "@solar-icons/react/line-duotone";

const types = {
  primary: "var(--color-secondary-500)",
  secondary: "var(--color-primary-100)",
};

//Base classes
const baseClasses = {
  icon: `
  transition-all
  hover:opacity-60 active:scale-90
  cursor-pointer
  `,
};

function IconDoutone({
  Icon = HomeIcon,
  size = 20,
  type = "primary",
  className = "",
}) {
  const selectedType = types[type] ?? types.primary;

  return (
    <Icon
      secondaryColor="var(--color-accent-100)"
      className={`
        ${baseClasses.icon}
        ${className}
      `}
      color={selectedType}
      secondaryOpacity={1}
      size={size}
    />
  );
}

export default IconDoutone;
