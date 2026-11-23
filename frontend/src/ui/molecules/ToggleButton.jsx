import { useThemeContext } from "../../contexts/ThemeContext";
import Button from "./Button";
const baseClasses = {
  button: `
  group-[.active]:opacity-80 group-[.active]:scale-95
  `,
};

function ToggleButton({ children, onClick, className = "" }) {
  const { selectedTypeInverse } = useThemeContext();
  return (
    <Button
      className={`
        ${baseClasses.button}
        ${className}
      `}
      token="sm"
      type={selectedTypeInverse}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default ToggleButton;
