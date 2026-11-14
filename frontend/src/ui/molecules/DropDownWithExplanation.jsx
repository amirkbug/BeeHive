import DropDown from "./DropDown";
import Button from "./Button";
import AnimatedIcon from "../atoms/AnimatedIcon";

import { useThemeContext } from "../../contexts/ThemeContext";

//Diffrent values for diffrent types
const tokens = {
  sm: "text-12px",
  md: "text-14px",
  lg: "text-16px",
};

//Temp object for dropdown list
const tempOptions = [
  { value: "every_15_minutes", label: "⏱️ Every 15 Minutes" },
  { value: "every_hour", label: "🕐 Every Hour" },
  { value: "every_6_hours", label: "🕕 Every 6 Hours" },
  { value: "every_day", label: "📅 Every Day" },
];

//Component itself
function DropDownWithExplanation({
  explanation = "Select the data field used to calculate this KPI.",
  dropDownName = "Sync Frequency",
  options = tempOptions,
  toekn = "md",
}) {
  const { selectedTypeInverse, type } = useThemeContext();
  //For making the dropdown name usable
  const normalizedName = dropDownName.trim().toLowerCase().replace(/\s+/g, "_");

  //Error boundry
  const selectedToken = tokens[type] ?? tokens.md;

  return (
    <div
      className="
        flex flex-row
        items-center justify-between
        w-full
      "
    >
      <p
        className={`
          ${selectedToken}
          ${selectedTypeInverse === "primary" ? "text-primary-100" : "text-secondary-500"}
        `}
      >
        {explanation}
      </p>
      <DropDown type={type}>
        <DropDown.DropDownButton opens={normalizedName}>
          <Button
            className="
              disabled:ring-1 disabled:ring-accent-100
            "
            type={selectedTypeInverse}
          >
            {dropDownName}
            <AnimatedIcon position="right" type={type} token={toekn} />
          </Button>
        </DropDown.DropDownButton>
        <DropDown.DropDownUl name={normalizedName}>
          {options.map((option) => (
            <DropDown.DropDownLi key={option.value} value={option.value}>
              {option.label}
            </DropDown.DropDownLi>
          ))}
        </DropDown.DropDownUl>
      </DropDown>
    </div>
  );
}

export default DropDownWithExplanation;
