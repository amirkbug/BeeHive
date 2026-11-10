//Objects for diffrent variations

const tokens = {
  sm: "w-8",
  md: "w-12",
  lg: "w-16",
};

//Comopnent intself
function OnlyColorBackground({ token = "md", color = "#f9a38f" }) {
  const selectedToken = tokens[token] ?? tokens.sm;

  return (
    <div
      className={`
        h-9/10
        rounded-full
        ${selectedToken}
      `}
      style={{ backgroundColor: color }}
    />
  );
}

export default OnlyColorBackground;
