import { AltArrowRightIcon as AltArrowRightIconBold } from "@solar-icons/react/bold/alt-arrow-right";
import { AltArrowDownIcon as AltArrowDownIconBold } from "@solar-icons/react/bold/alt-arrow-down";
import { AltArrowUpIcon as AltArrowUpIconBold } from "@solar-icons/react/bold/alt-arrow-up";
import { AltArrowLeftIcon as AltArrowLeftIconBold } from "@solar-icons/react/bold/alt-arrow-left";

import { AltArrowRightIcon as AltArrowRightIconLinear } from "@solar-icons/react/linear/alt-arrow-right";
import { AltArrowDownIcon as AltArrowDownIconLinear } from "@solar-icons/react/linear/alt-arrow-down";
import { AltArrowUpIcon as AltArrowUpIconLinear } from "@solar-icons/react/linear/alt-arrow-up";
import { AltArrowLeftIcon as AltArrowLeftIconLinear } from "@solar-icons/react/linear/alt-arrow-left";

//Objects for diffrent variations
const tokens = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const types = {
  primary: "text-primary-100",
  secondary: "text-secondary-500",
  primary_200: "text-primary-200",
  secondary_400: "text-secondary-400",
};

const icons = {
  right: {
    bold: AltArrowRightIconBold,
    linear: AltArrowRightIconLinear,
  },
  down: {
    bold: AltArrowDownIconBold,
    linear: AltArrowDownIconLinear,
  },
  up: {
    bold: AltArrowUpIconBold,
    linear: AltArrowUpIconLinear,
  },
  left: {
    bold: AltArrowLeftIconBold,
    linear: AltArrowLeftIconLinear,
  },
};

function AnimatedIcon({
  type = "primary",
  token = "md",
  position = "down",
  className = "",
}) {
  //Error boundry
  const selectedToken = tokens[token] ?? tokens.md;
  const selectedType = types[type] ?? types.primary;
  const selectedPosition = icons[position] ? position : "down";

  const BoldIcon = icons[selectedPosition].bold;
  const LinearIcon = icons[selectedPosition].linear;

  //Base style
  const base = `absolute ${selectedType} inset-0 transition-opacity duration-150`;

  //Component itself
  return (
    <span
      className={`
        relative
        inline-flex
        shrink-0
        group
        ${selectedToken}
        ${className}
      `}
    >
      <LinearIcon
        className={`
          opacity-100
          group-hover:opacity-0
          ${base}
        `}
        size="100%"
        aria-hidden="true"
      />

      <BoldIcon
        className={`
          opacity-0
          group-hover:opacity-100
          ${base}
        `}
        size="100%"
        aria-hidden="true"
      />
    </span>
  );
}

export default AnimatedIcon;
