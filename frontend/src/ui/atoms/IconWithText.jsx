import { TargetIcon } from "@solar-icons/react/linear";

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
      <Icon size={18} />
    </span>
  );
}

export default IconWithText;
