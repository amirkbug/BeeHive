import InputContainer from "../../../ui/molecules/InputContainer";
import DropDownWithExplanation from "../../../ui/molecules/DropDownWithExplanation";

import { useThemeContext } from "../../../contexts/ThemeContext";

//Objects for rendering the dropdowns
const dataSourceOptions = [
  { value: "revenue", label: "💰 Revenue" },
  { value: "salse", label: "📊 Sales" },
  { value: "orders", label: "🛒 Orders" },
  { value: "users", label: "👥 Users" },
  { value: "expenses", label: "💸 Expenses" },
];
const trendDirectionOptions = [
  { value: "higher_is_better", label: "📈 Higher is Better" },
  { value: "lower_is_better", label: "📉 Lower is Better" },
];
const numberFormatOptions = [
  { value: "currency", label: "💵 Currency" },
  { value: "precentage", label: "📊 Percentage" },
  { value: "number", label: "🔢 Number" },
  { value: "decimal", label: "➗ Decimal" },
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
    </form>
  );
}

export default KpiForm;
