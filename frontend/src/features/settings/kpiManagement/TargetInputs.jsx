import InputContainer from "../../../ui/molecules/InputContainer";

const baseClasses = {
  div: `
    flex flex-row
    w-full
    gap-4
  `,
};

function KpiTargetInputs({ selectedTypeInverse, contents, errors, register }) {
  return (
    <div className={baseClasses.div}>
      {contents.map((content) => (
        <InputContainer
          key={content.name}
          hasError={Boolean(errors?.targets?.[content.name])}
          inputId={`targets.${content.name}`}
          token="md"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>
            {content.title} Target
          </InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="e.g. 36,000"
            type="number"
            {...register(`targets.${content.name}`, {
              valueAsNumber: true,
              setValueAs: (value) => (value === "" ? 0 : Number(value)),
              min: {
                value: 0,
                message: "Target cannot be negative.",
              },
              max: {
                value: 1000000000,
                message: "Target cannot exceed 1 billion.",
              },
            })}
          />

          <InputContainer.InputTxt classNameOnError="text-destructive-500">
            {errors?.targets?.[content.name]?.message ||
              `Set the target you want to achieve each ${content.title.toLowerCase()}.`}
          </InputContainer.InputTxt>
        </InputContainer>
      ))}
    </div>
  );
}

export default KpiTargetInputs;
