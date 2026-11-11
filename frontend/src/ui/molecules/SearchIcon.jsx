import FloatingButton from "../atoms/FloatingButton";
import InputContainer from "./InputContainer";

import { useState } from "react";
import { MagnifierIcon } from "@solar-icons/react/line-duotone/magnifier";

//Objects for diffrent variations
const types = ["primary", "secondary"];

//Base classes
const baseClasses = {
  div: `
  relative
  flex
  `,

  floatingButton: `
  shrink-0
  `,
};

//Component itself
function SearchIcon({ type = "primary" }) {
  //Dynamic functionality
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function handleSearchClick() {
    setIsSearchOpen((isOpen) => !isOpen);
  }

  //Error boundry
  const selectedType = types.includes(type) ? type : "primary";

  //Coponent itself
  return (
    <div className={baseClasses.div}>
      <FloatingButton
        onClick={handleSearchClick}
        type={selectedType}
        token="sm"
        Icon={MagnifierIcon}
        className={`
          ${baseClasses.floatingButton}
          ${isSearchOpen ? "absolute opacity-0" : "z-10 opacity-100"}
        `}
      />

      <InputContainer type={selectedType} token="md">
        <InputContainer.Input
          LeftIcon={MagnifierIcon}
          placeholderText="Write here ..."
          classNameMainContainer={`
            ${
              isSearchOpen
                ? "opacity-100 pl-3"
                : "opacity-0 pointer-events-none !w-0 absolute !p-0 z-0"
            }
            `}
        />
      </InputContainer>
    </div>
  );
}

export default SearchIcon;
