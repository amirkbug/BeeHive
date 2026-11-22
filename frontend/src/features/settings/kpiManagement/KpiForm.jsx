import InputContainer from "../../../ui/molecules/InputContainer";
import DropDownWithExplanation from "../../../ui/molecules/DropDownWithExplanation";

import { useThemeContext } from "../../../contexts/ThemeContext";
import {
  WalletMoneyIcon,
  GraphUpIcon,
  UsersGroupRoundedIcon,
  CartLargeIcon,
  TargetIcon,
  DatabaseIcon,
} from "@solar-icons/react/linear";
import IconWithText from "../../../ui/atoms/IconWithText";

//Objects for rendering the dropdowns
const dataSourceOptions = [
  { value: "revenue", label: "💰 Revenue" },
  { value: "sales", label: "📊 Sales" },
  { value: "orders", label: "🛒 Orders" },
  { value: "users", label: "👥 Users" },
  { value: "expenses", label: "💸 Expenses" },
];

const trendDirectionOptions = [
  { value: "higher_is_better", label: "📈 Higher is Better" },
  { value: "lower_is_better", label: "📉 Lower is Better" },
];

const numberFormatOptions = [
  { value: "currency", label: "💵 Currency ($2,323.50)" },
  { value: "number", label: "🔢 Number (2,323)" },
  { value: "compact", label: "📈 Compact (2.3K)" },
  { value: "decimal", label: "➗ Decimal (2,323.45)" },
];

const Icon = [
  {
    value: "wallet-money",
    label: <IconWithText Icon={WalletMoneyIcon} title="Wallet" />,
  },
  {
    value: "graph-up",
    label: <IconWithText Icon={GraphUpIcon} title="Graph" />,
  },
  {
    value: "users-group-rounded",
    label: <IconWithText Icon={UsersGroupRoundedIcon} title="Users" />,
  },
  {
    value: "cart-large",
    label: <IconWithText Icon={CartLargeIcon} title="Cart" />,
  },
  {
    value: "target",
    label: <IconWithText Icon={TargetIcon} title="Target" />,
  },
  {
    value: "database",
    label: <IconWithText Icon={DatabaseIcon} title="Database" />,
  },
];

//Base classes
const baseClasses = {
  form: `
    flex flex-col
    items-center
    w-full h-full
    gap-15
    `,
};

//Component itself
function KpiForm() {
  const { selectedTypeInverse } = useThemeContext();
  return (
    <form className={baseClasses.form}>
      <InputContainer token="md" type={selectedTypeInverse}>
        <InputContainer.InputTxt>KPI Title</InputContainer.InputTxt>
        <InputContainer.Input
          LeftIcon={null}
          placeholderText="e.g. Total Revenue"
        />
        <InputContainer.InputTxt>
          Enter the main title displayed on the KPI card.
        </InputContainer.InputTxt>
      </InputContainer>
      <DropDownWithExplanation
        dropDownName="Data Source"
        explanation="Select the data field used to calculate this KPI."
        options={dataSourceOptions}
      />
      <DropDownWithExplanation
        dropDownName="Trend Direction"
        explanation="Choose whether higher or lower values indicate
 better performance."
        options={trendDirectionOptions}
      />
      <DropDownWithExplanation
        dropDownName="Number Format"
        explanation="Choose how the KPI value should be displayed."
        options={numberFormatOptions}
      />
      <DropDownWithExplanation
        dropDownName="Icon Display"
        explanation="Select an icon to visually represent this KPI on your dashboard."
        options={Icon}
      />
      <InputContainer token="md" type={selectedTypeInverse}>
        <InputContainer.InputTxt>KPI Caption</InputContainer.InputTxt>
        <InputContainer.Input
          LeftIcon={null}
          placeholderText="e.g. Revenue generated this month"
        />
        <InputContainer.InputTxt>
          Add a short description to provide additional context.
        </InputContainer.InputTxt>
      </InputContainer>
      <div
        className="
          flex flex-row
          gap-4
        "
      >
        <InputContainer token="md" type={selectedTypeInverse}>
          <InputContainer.InputTxt>Daily Target</InputContainer.InputTxt>
          <InputContainer.Input LeftIcon={null} placeholderText="e.g. 100" />
          <InputContainer.InputTxt>
            Set the target you want to achieve each day.
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer token="md" type={selectedTypeInverse}>
          <InputContainer.InputTxt>Monthly Target</InputContainer.InputTxt>
          <InputContainer.Input LeftIcon={null} placeholderText="e.g. 3,000" />
          <InputContainer.InputTxt>
            Set the target you want to achieve each month.
          </InputContainer.InputTxt>
        </InputContainer>

        <InputContainer token="md" type={selectedTypeInverse}>
          <InputContainer.InputTxt>Yearly Target</InputContainer.InputTxt>
          <InputContainer.Input LeftIcon={null} placeholderText="e.g. 36,000" />
          <InputContainer.InputTxt>
            Set the target you want to achieve each year.
          </InputContainer.InputTxt>
        </InputContainer>
      </div>
    </form>
  );
}

export default KpiForm;
