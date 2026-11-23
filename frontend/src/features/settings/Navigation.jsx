import NavigationButtons from "./NavigationButtons";
import { useThemeContext } from "../../contexts/ThemeContext";

const baseClasses = {
  nav: `
  flex flex-col shrink-0
  items-start justify-start
  h-full
  gap-8
  px-4 
  pr-7
  pb-4
  border-r
  `,
};

function Navigation() {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <nav
      className={`
        ${baseClasses.nav}
        ${selectedTypeInverse === "primary" ? "border-primary-100/10" : "border-secondary-500/10"}
      `}
    >
      <NavigationButtons />
    </nav>
  );
}

export default Navigation;
