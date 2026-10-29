import {
  AltArrowRightIcon as AltArrowRightIconBold,
  AltArrowDownIcon as AltArrowDownIconBold,
  AltArrowUpIcon as AltArrowUpIconBold,
  AltArrowLeftIcon as AltArrowLeftIconBold,
} from "@solar-icons/react/bold";

import {
  AltArrowRightIcon as AltArrowRightIconLinear,
  AltArrowDownIcon as AltArrowDownIconLinear,
  AltArrowUpIcon as AltArrowUpIconLinear,
  AltArrowLeftIcon as AltArrowLeftIconLinear,
} from "@solar-icons/react/linear";

//Objects for diffrent variations
const tokens = {
  sm: "size-4",
  md: "size-5",
  lg: "size-6",
};

const types = {
  primary: {
    iconClasses: "text-primary-100",
  },
  secondary: {
    iconClasses: "text-secondary-500",
  },
  primary_200: {
    iconClasses: "text-primary-200",
  },
  secondary_400: {
    iconClasses: "text-secondary-400",
  },
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
  isBackgroundChange = false,
}) {
  //Error boundry
  const selectedToken = tokens[token] ?? tokens.md;
  const selectedType = types[type] ?? types.primary;
  const selectedPosition = icons[position] ? position : "down";

  const BoldIcon = icons[selectedPosition].bold;
  const LinearIcon = icons[selectedPosition].linear;

  //Base style
  const base = `absolute group-hover:opacity-70 ${selectedType.iconClasses} inset-0 transition-opacity duration-150`;

  //Component itself
  return (
    <span
      className={`
        relative
        inline-flex
        shrink-0
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
          ${isBackgroundChange ? `${selectedType.conditionalClasses}` : ""}
        `}
        size="100%"
        aria-hidden="true"
      />
    </span>
  );
}

export default AnimatedIcon;
