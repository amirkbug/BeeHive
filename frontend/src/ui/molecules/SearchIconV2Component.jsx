import IconDoutone from "../atoms/IconDoutone";

import { useState } from "react";
import { MagnifierIcon } from "@solar-icons/react/line-duotone/magnifier";
import { useThemeContext } from "../../contexts/ThemeContext";

const baseClasses = {
  div: `
  has-focus-visible:shadow-300-BoxShadowM
  flex flex-row
  transition-all
  hover:shadow-300-BoxShadowM
  rounded-full
  `,

  button: `
  flex flex-col
  items-center justify-center
  size-10
  gap-2.5
  pl-2.5
  focus:non
  appearance-none
  `,

  input: `
  pl-2
  outline-none
  transition-opacity duration-100
  focus:outline-none
  appearance-none
`,
};

function SearchIconV2Component() {
  const [isOpen, setIsOpen] = useState(false);
  const { type, selectedTypeInverse } = useThemeContext();

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div
      className={`
        ${baseClasses.div}
        ${type === "primary" ? "bg-secondary-500" : "bg-primary-100"}
        ${isOpen ? "w-1/5" : "size-10"}
      `}
    >
      <button
        onClick={handleOpen}
        className={`
          ${baseClasses.button}
        `}
      >
        <IconDoutone
          Icon={MagnifierIcon}
          type={selectedTypeInverse}
          size={20}
        />
      </button>
      <input
        className={`
          ${baseClasses.input}
          ${type === "primary" ? "text-primary-100 placeholder:text-primary-500" : "text-secondary-500 placeholder:text-secondary-200"}
          ${isOpen ? "opacity-100 delay-20" : "opacity-0 delay-0"}
        `}
        name="search"
        type="text"
        placeholder="Search here ..."
      />
    </div>
  );
}

export default SearchIconV2Component;
