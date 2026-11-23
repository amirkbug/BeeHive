import InputContainer from "../../../ui/molecules/InputContainer";

const baseClasses = {
  div: `
    flex flex-row
    w-full
    gap-4
  `,
};

function KpiTargetInputs({ selectedTypeInverse, contents, register }) {
  return (
    <div className={baseClasses.div}>
      {contents.map((content) => (
        <InputContainer
          key={content.name}
          token="md"
          type={selectedTypeInverse}
        >
          <InputContainer.InputTxt>
            {content.title} Target
          </InputContainer.InputTxt>

          <InputContainer.Input
            LeftIcon={null}
            placeholderText="e.g. 36,000"
            {...register(`targets.${content.name}`, {
              valueAsNumber: true,
            })}
          />

          <InputContainer.InputTxt>
            Set the target you want to achieve each{" "}
            {content.title.toLowerCase()}.
          </InputContainer.InputTxt>
        </InputContainer>
      ))}
    </div>
  );
}

export default KpiTargetInputs;
