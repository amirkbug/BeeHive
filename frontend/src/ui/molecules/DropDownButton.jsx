import { AltArrowDownIcon } from "@solar-icons/react/bold/alt-arrow-down";

//Object for diffrent variations
const tokens = {
  sm: {
    liClasses: "text-12px h-8",
    iconSize: 16,
  },
  md: {
    liClasses: "text-14px h-10",
    iconSize: 18,
  },
  lg: {
    liClasses: "text-16px h-12",
    iconSize: 20,
  },
};

const types = {
  priamry: "text-primary-100",
  secondary: "text-secondary-500",
};

//Base classes
const base = `
  group
  flex flex-row
  items-center justify-start
  gap-1 cursor-pointer
  transition-all
  w-full
  hover:opacity-70
  `;

function DropDownButton({
  token = "sm",
  type = "primary",
  Icon = AltArrowDownIcon,
  children,
}) {
  //Error boundry
  const selectedToken = tokens[token] ?? tokens.lg;
  const selectedType = types[type] ?? types.priamry;

  //component itself
  return (
    <li
      className={`
        t
        ${selectedType}
        ${selectedToken.liClasses}
        ${base}
      `}
    >
      {Icon && <AltArrowDownIcon size={selectedToken.iconSize} />}
      {children}
    </li>
  );
}

export default DropDownButton;
