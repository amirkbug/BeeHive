import UserProfile from "../../../ui/atoms/UserProfile";
import Button from "../../../ui/molecules/Button";

import { useThemeContext } from "../../../contexts/ThemeContext";
import { LinkIcon, PenIcon } from "@solar-icons/react/linear";
import { useSelector } from "react-redux";

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
  const { userBackgroundColor } = useSelector((state) => state.settings);

  return (
    <div
      style={{
        "--profile-bg": userBackgroundColor,
      }}
      className={`
        ${baseClasses.div}
        ${`${type === "secondary" ? "from-(--profile-bg) to-secondary-500" : "from-(--profile-bg) to-primary-100"}`}
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
