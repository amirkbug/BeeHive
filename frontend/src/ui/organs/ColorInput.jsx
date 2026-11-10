import OnlyColorBackground from "../atoms/OnlyColorBackground";

function ColorInput({ children, color }) {
  return (
    <div
      className="
        flex flex-row
        items-center justify-center
        w-full
        gap-2
      "
    >
      <OnlyColorBackground token="md" color={color} />
      {children}
    </div>
  );
}

export default ColorInput;
