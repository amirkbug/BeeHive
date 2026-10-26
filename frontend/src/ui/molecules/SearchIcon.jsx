import FloatingButtons from "../atoms/FloatingButtons";
import Inputs from "./Inputs";

import { useState } from "react";
import { MagnifierIcon } from "@solar-icons/react/linear/magnifier";

//Objects for diffrent variations
const types = ["primary", "secondary"];

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
    <div
      className="
        relative
        flex
      "
    >
      <FloatingButtons
        onClick={handleSearchClick}
        type={selectedType}
        token="sm"
        Icon={MagnifierIcon}
        className={`
          ${isSearchOpen ? "absolute opacity-0" : "z-10 opacity-100"}
        `}
      />
      <Inputs
        LeftIcon={MagnifierIcon}
        rightTxt=""
        RightIcon={[]}
        type={selectedType}
        token="md"
        classNameMainContainer={`${
          isSearchOpen
            ? "opacity-100 pl-3"
            : "opacity-0 pointer-events-none !w-5 absolute !p-0 z-0"
        }`}
      />
    </div>
  );
}

export default SearchIcon;
