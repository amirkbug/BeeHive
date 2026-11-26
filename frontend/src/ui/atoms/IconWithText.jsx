import { TargetIcon } from "@solar-icons/react/linear";
import IconDoutone from "./IconDoutone";

const baseClasses = {
  span: `
     flex flex-row
     items-center
     gap-1
     text-12px
    `,
};

function IconWithText({ Icon = TargetIcon, title = "Database" }) {
  return (
    <span className={baseClasses.span}>
      <p>{title}</p>
      <IconDoutone Icon={Icon} size={18} />
    </span>
  );
}

export default IconWithText;
