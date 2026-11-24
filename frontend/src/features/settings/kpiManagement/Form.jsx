import InputContainer from "../../../ui/molecules/InputContainer";
import DropDownWithExplanation from "../../../ui/molecules/DropDownWithExplanation";
import IconWithText from "../../../ui/atoms/IconWithText";
import TargetInputs from "./TargetInputs";

import {
  WalletMoneyIcon,
  GraphUpIcon,
  UsersGroupRoundedIcon,
  CartLargeIcon,
  TargetIcon,
  DatabaseIcon,
} from "@solar-icons/react/linear";
import { Controller } from "react-hook-form";

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
  { value: "currency", label: "💵 Currency ($2,323)" },
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

//Objects for rendering  components easier

const dropDownContents = [
  {
    name: "dataSource",
    title: "Data Source",
    explanation: "Select the data field used to calculate this KPI.",
    options: dataSourceOptions,
  },
  {
    name: "trendDirection",
    title: "Trend Direction",
    explanation:
      "Choose whether higher or lower values indicate better performance.",
    options: trendDirectionOptions,
  },
  {
    name: "numberFormat",
    title: "Number Format",
    explanation: "Choose how the KPI value should be displayed.",
    options: numberFormatOptions,
  },
  {
    name: "icon",
    title: "Icon Display",
    explanation:
      "Select an icon to visually represent this KPI on your dashboard.",
    options: Icon,
  },
];

const firstTargetInputsContents = [
  { name: "daily", title: "Daily" },
  { name: "weekly", title: "Weekly" },
];

const secondTargetInputsContents = [
  { name: "monthly", title: "Monthly" },
  { name: "yearly", title: "Yearly" },
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
function KpiForm({ register, control, selectedTypeInverse }) {
  return (
    <section className={baseClasses.form}>
      <InputContainer token="md" type={selectedTypeInverse}>
        <InputContainer.InputTxt>KPI Title</InputContainer.InputTxt>
        <InputContainer.Input
          LeftIcon={null}
          placeholderText="e.g. Total Revenue"
          {...register("title")}
        />
        <InputContainer.InputTxt>
          Enter the main title displayed on the KPI card.
        </InputContainer.InputTxt>
      </InputContainer>
      {dropDownContents.map((content) => (
        <Controller
          key={content.name}
          name={content.name}
          control={control}
          render={({ field }) => {
            return (
              <DropDownWithExplanation
                dropDownName={content.title}
                explanation={content.explanation}
                options={content.options}
                value={field.value}
                onChange={field.onChange}
              />
            );
          }}
        />
      ))}
      <InputContainer token="md" type={selectedTypeInverse}>
        <InputContainer.InputTxt>KPI Caption</InputContainer.InputTxt>
        <InputContainer.Input
          LeftIcon={null}
          placeholderText="e.g. Revenue generated this month"
          {...register("kpiCaption")}
        />
        <InputContainer.InputTxt>
          Add a short description to provide additional context.
        </InputContainer.InputTxt>
      </InputContainer>
      <TargetInputs
        contents={firstTargetInputsContents}
        register={register}
        selectedTypeInverse={selectedTypeInverse}
      />

      <TargetInputs
        contents={secondTargetInputsContents}
        register={register}
        selectedTypeInverse={selectedTypeInverse}
      />
    </section>
  );
}

export default KpiForm;
