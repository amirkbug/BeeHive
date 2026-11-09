import RadioButton from "../atoms/RadioButton";
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
  pl-2 pr-2
  rounded-lg
  `;

function Header({ type = "primary" }) {
  //Error boundry
  const selectedType = Object.hasOwn(types, type) ? type : "primary";
  const selectedTypeInerse =
    selectedType === "primary" ? "secondary" : "primary";

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
        <RadioButton type="darkMode" />
      </div>
    </header>
  );
}

export default Header;
