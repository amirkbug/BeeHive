import OnlyColorBackground from "../atoms/OnlyColorBackground";

//Base classes
const baseClasses = {
  div: `
  flex flex-row
  items-center justify-center
  w-full
  gap-2
  `,
};

function ColorInput({ children, color }) {
  return (
    <div className={baseClasses.div}>
      <OnlyColorBackground token="md" color={color} />
      {children}
    </div>
  );
}

export default ColorInput;
