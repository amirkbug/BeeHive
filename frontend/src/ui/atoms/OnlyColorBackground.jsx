//Objects for diffrent variations

const tokens = {
  sm: "w-8",
  md: "w-12",
  lg: "w-16",
};

//Base classes
const baseClasses = {
  div: `
  h-9/10
  rounded-full
  `,
};

//Comopnent intself
function OnlyColorBackground({ token = "md", color = "#f9a38f" }) {
  const selectedToken = tokens[token] ?? tokens.sm;

  return (
    <div
      className={`
        ${baseClasses.div}
        ${selectedToken}
      `}
      style={{ backgroundColor: color }}
    />
  );
}

export default OnlyColorBackground;
