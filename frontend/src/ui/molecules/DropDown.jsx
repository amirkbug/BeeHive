import AnimatedIcon from "../atoms/AnimatedIcon";
import DropDownButton from "./DropDownButton";

//Objects for diffrent variations
const types = {
  primary: `bg-secondary-500`,
  secondary: "bg-primary-100",
};

const ulBase = `
  flex flex-col
  items-center justify-end
  w-fit
  gap-2
  px-2 py-1
  rounded-lg
  shadow-200
`;

function DropDown({
  token = "sm",
  type = "primary",
  rightIconPosition = "down",
  dropDownContent = [
    { txt: "💰 Revenue", hasAnimatedIcon: false },
    { txt: "📊 Sales", hasAnimatedIcon: false },
    { txt: "📈 Profit", hasAnimatedIcon: false },
  ],
}) {
  //Error boundry
  const selectedType = types[type] ?? types.primary;

  //Component itself
  return (
    <ul
      className={`
        ${ulBase}
        ${selectedType}
      `}
    >
      {dropDownContent.map((content) => (
        <DropDownButton key={content.txt} type={type} token={token} Icon={null}>
          {content.txt}
          {content.hasAnimatedIcon && (
            <AnimatedIcon
              type={type}
              token={token}
              position={rightIconPosition}
              isBackgroundChange={true}
            />
          )}
        </DropDownButton>
      ))}
    </ul>
  );
}

export default DropDown;
