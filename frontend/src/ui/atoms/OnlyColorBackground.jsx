//Objects for diffrent variations

const tokens = {
  sm: "w-12 h-22",
  md: "w-13 h-23",
  lg: "w-14 h-25",
};

//Base classes
const baseClasses = {
  div: `
  ring-1
  rounded-full
  `,
};

//Comopnent intself
function OnlyColorBackground({ token = "md", color = "#f9a38f" }) {
  const selectedToken = tokens[token] ?? tokens.sm;

  return (
    <div
      className={`
        ring-primary-300
        ${baseClasses.div}
        ${selectedToken}
      `}
      style={{ backgroundColor: color }}
    />
  );
}

export default OnlyColorBackground;
