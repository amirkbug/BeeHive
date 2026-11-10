import RadioButton from "../atoms/RadioButton";
import FloatingButton from "../atoms/FloatingButton";
import SearchIcon from "../molecules/SearchIcon";

import { BellRingIcon } from "@solar-icons/react/line-duotone/bell-ring";
import { useThemeContext } from "../../contexts/ThemeContext";

//Objects for diffrent variations

const types = {
  primary: "bg-primary-100",
  secondary: "bg-secondary-500",
};

const headerBase = `
  flex flex-row
  items-center justify-between
  w-full
  py-2
  pl-2 pr-2
  rounded-lg
  transition-all
  hover:shadow-200-BoxShadowM
  `;

function Header() {
  const { isDarkMode, handleDarkMode, selectedTypeInerse, type } =
    useThemeContext();
  //Error boundry
  const selectedType = Object.hasOwn(types, type) ? type : "primary";

  //Component itself
  return (
    <header
      className={`
        ${headerBase}
        ${types[selectedType]}
      `}
    >
      <SearchIcon type={selectedTypeInerse} />
      <div
        className="
          flex flex-row
          items-center justify-end
          gap-2
        "
      >
        <FloatingButton
          type={selectedTypeInerse}
          token="sm"
          Icon={BellRingIcon}
        />
        <RadioButton
          type="darkMode"
          checked={isDarkMode}
          onChange={(e) => handleDarkMode(e.target.checked)}
        />
      </div>
    </header>
  );
}

export default Header;
