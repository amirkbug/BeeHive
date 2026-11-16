import UserProfile from "../../../ui/atoms/UserProfile";
import Button from "../../../ui/molecules/Button";

import { useThemeContext } from "../../../contexts/ThemeContext";
import { LinkIcon, PenIcon } from "@solar-icons/react/linear";

const baseClasses = {
  div: `
  flex flex-row
  items-end justify-between
  gap-15
  px-4 py-7
  rounded-lg
  bg-linear-to-b
  `,

  secondDiv: `
  flex flex-row
  justify-end
  gap-5
  `,
};

function Buttons() {
  const { type } = useThemeContext();
  const gradientColor = `${type === "secondary" ? "from-primary-100 to-secondary-500" : "from-secondary-500 to-primary-100"}`;

  return (
    <div
      className={`
        ${baseClasses.div}
        ${gradientColor}
      `}
    >
      <UserProfile token="xl" />
      <div
        className={`
          ${baseClasses.secondDiv}
        `}
      >
        <Button type={`outline_${type}`}>
          Copy Link
          <LinkIcon size={18} />
        </Button>
        <Button type={`outline_${type}`}>
          Edit Profile
          <PenIcon size={18} />
        </Button>
      </div>
    </div>
  );
}

export default Buttons;
