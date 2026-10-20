import Buttons from "../molecules/Buttons";
import { MagnifierLinearIcon } from "@solar-icons/react";

function Header() {
  return (
    <header
      className="
        flex flex-col
        gap-8
        p-8
      "
    >
      <h1
        className="
          text-2xl font-bold
        "
      >
        UserProfile Playground
      </h1>
      <Buttons token="sm" type="primary">
        Small
      </Buttons>

      <Buttons token="md" type="primary_destructive">
        Delete
      </Buttons>

      <Buttons token="lg" type="secondary_success">
        Save changes
      </Buttons>

      <Buttons token="md" type="outline_secondary">
        Cancel
      </Buttons>

      <Buttons token="md" type="ghost_primary">
        Learn more
      </Buttons>

      <Buttons token="md" type="primary">
        <MagnifierLinearIcon size={20} />
        Search
      </Buttons>
    </header>
  );
}

export default Header;
