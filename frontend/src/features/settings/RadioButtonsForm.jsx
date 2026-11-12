import IconDoutone from "../../ui/atoms/IconDoutone";
import RadioButton from "../../ui/atoms/RadioButton";

import { useThemeContext } from "../../contexts/ThemeContext";
import { LetterIcon } from "@solar-icons/react/line-duotone";

const notificationSettingsTemp = [
  {
    id: 1,
    name: "Receive email notifications",
    enabled: true,
  },
  {
    id: 2,
    name: "Weekly summary report",
    enabled: false,
  },
  {
    id: 3,
    name: "Monthly analytics report",
    enabled: true,
  },
  {
    id: 4,
    name: "Product updates",
    enabled: false,
  },
  {
    id: 5,
    name: "Security alerts",
    enabled: true,
  },
];

const baseClasses = {
  form: `
    flex flex-col
    gap-4
    `,

  div: `
    flex flex-row
    justify-between
    w-full
    gap-2
    pb-2
    text-20px font-semibold
    border-b 
    felx
    `,

  secondDiv: `
    flex flex-row
    justify-between
    w-full h-fit
    text-14px font-normal
    `,
};

function RadioButtonsForm({
  title = "Email Notifications",
  Icon = LetterIcon,
  options = notificationSettingsTemp,
}) {
  const { type } = useThemeContext();

  return (
    <form className={baseClasses.form}>
      <div
        className={`
          ${type === "primary" ? "border-secondary-500/10" : "border-primary-100/10"}
          ${type === "primary" ? "text-secondary-500" : "text-primary-100"}
          ${baseClasses.div}
        `}
      >
        <h1>{title}</h1>
        <span>
          <IconDoutone size={24} type={type} Icon={Icon} />
        </span>
      </div>

      {options.map((option) => (
        <div
          key={option.id}
          className={`
            ${type === "primary" ? "text-secondary-500" : "text-primary-100"}
            ${baseClasses.secondDiv}
          `}
        >
          <h3>{option.name}</h3>
          <RadioButton type={type} token="md" />
        </div>
      ))}
    </form>
  );
}

export default RadioButtonsForm;
