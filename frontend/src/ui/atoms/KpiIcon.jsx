import useCustomColor from "../../hooks/useCustomColor";

import { DollarIcon } from "@solar-icons/react/linear/dollar";

//Objects for diffrent variations
const tokens = {
  sm: {
    containerToken: "size-6",
    iconToken: "size-4",
  },
  md: {
    containerToken: "size-8",
    iconToken: "size-4.5",
  },
  lg: {
    containerToken: "size-10",
    iconToken: "size-5",
  },
};

//Base classes
const baseClasses = {
  span: `
  flex
  items-center justify-center
  rounded-md
  `,
};

function KpiIcon({ type = "warning", token = "md", Icon = DollarIcon }) {
  //Error boundry
  const selectedToken = tokens[token] ?? tokens.md;
  const customColor = useCustomColor(type);

  //Component itself
  return (
    <span
      style={{
        "--bg-color": `color-mix(in srgb, ${customColor} 20%, transparent)`,
        "--icon-color": customColor,
      }}
      className={`
        bg-(--bg-color)
        ${baseClasses.span}
        ${selectedToken.containerToken}
      `}
    >
      <Icon
        className={`
          text-(--icon-color)
          ${selectedToken.iconToken}
        `}
      />
    </span>
  );
}

export default KpiIcon;
