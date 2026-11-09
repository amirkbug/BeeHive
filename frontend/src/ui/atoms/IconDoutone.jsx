import { HomeIcon } from "@solar-icons/react/line-duotone";

const types = {
  primary: "var(--color-secondary-500)",
  secondary: "var(--color-primary-100)",
};

function IconDoutone({ Icon = HomeIcon, size = 20, type = "primary" }) {
  const selectedType = types[type] ?? types.primary;

  return (
    <Icon
      secondaryColor="var(--color-accent-100)"
      color={selectedType}
      secondaryOpacity={1}
      size={size}
    />
  );
}

export default IconDoutone;
