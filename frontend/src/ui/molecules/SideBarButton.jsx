import FloatingButton from "../atoms/FloatingButton";
import Button from "./Button";

import { HomeIcon } from "@solar-icons/react/line-duotone";

//Objects for diffrent variations
const types = {
  primary: "group-[.active]:text-secondary-300",
  secondary: "group-[.active]:text-primary-300",
};

function SideBarButton({ type = "secondary", children, Icon = HomeIcon }) {
  //Error boundry
  const selectedType = types[type] ?? types.primary;

  //Component itself
  return (
    <div
      className="
        flex flex-row
        translate-x-2
      "
    >
      <FloatingButton
        type={type}
        className={`
          group-hover/sidebar:opacity-0
        `}
        Icon={Icon}
        token="sm"
      />
      <Button
        type={type}
        className={`
          absolute
          items-center justify-start
          w-0!
          opacity-0
          group-[.active]:ring-1 group-[.active]:ring-accent-100 group-hover/sidebar:opacity-100 group-hover/sidebar:w-72.75!
          ${selectedType}
        `}
      >
        {children}
      </Button>
    </div>
  );
}

export default SideBarButton;
