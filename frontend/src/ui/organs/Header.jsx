import CheckBox from "../atoms/CheckBox";
import FloatingButton from "../atoms/FloatingButton";
import SearchIcon from "../molecules/SearchIcon";

import { BellRingIcon } from "@solar-icons/react/line-duotone/bell-ring";
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
  pl-5 pr-2
  rounded-lg
  `;

function Header({ type = "primary" }) {
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
      <SearchIcon type={selectedType} />
      <div
        className="
          flex flex-row
          items-center justify-end
          gap-2
        "
      >
        <FloatingButton type={selectedType} token="sm" Icon={BellRingIcon} />
        <CheckBox type="darkMode" />
      </div>
    </header>
  );
}

export default Header;
