import { HomeIcon } from "@solar-icons/react/linear/home";

const base = `
  flex flex-row
  items-center justify-start
  gap-2
`;

const types = {
  primary: "text-secondary-500",
  secondary: "text-secondary-100",
};

const tokens = {
  sm: { textSize: "text-12px", iconSize: 16 },
  md: { textSize: "text-14px", iconSize: 18 },
  lg: { textSize: "text-16px", iconSize: 20 },
};

function InputTxt({
  isCaption = false,
  token = "md",
  type = "primary",
  Icon = HomeIcon,
  children,
  inputId,
}) {
  const selectedToken = tokens[token] ?? tokens.md;
  const selectedType = types[type] ?? types.primary;

  const Tag = isCaption ? "span" : "label";

  const tagProps = isCaption ? {} : { htmlFor: inputId };

  return (
    <Tag
      className={`
        ${base}
        ${selectedToken.textSize}
        ${selectedType}
      `}
      {...tagProps}
    >
      {Icon && <Icon size={selectedToken.iconSize} />}
      {children}
    </Tag>
  );
}

export default InputTxt;
