import { MagnifierIcon } from "@solar-icons/react/line-duotone/magnifier";
import IconDoutone from "../../atoms/IconDoutone";
import { useState } from "react";

const baseClasses = {
  div: `
  flex flex-row
  bg-secondary-500
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
  text-primary-100
  outline-none
  transition-opacity duration-100
  focus:outline-none
  placeholder:text-primary-500
  appearance-none
`,
};

function SearchIconV2Component() {
  const [isOpen, setIsOpen] = useState(true);

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div
      className={`
        has-focus-visible:shadow-300-BoxShadowM
        ${baseClasses.div}
        ${isOpen ? "w-1/5" : "size-10"}
      `}
    >
      <button
        onClick={handleOpen}
        className={`
          ${baseClasses.button}
        `}
      >
        <IconDoutone Icon={MagnifierIcon} type="secondary" size={20} />
      </button>
      <input
        className={`
          ${baseClasses.input}
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
