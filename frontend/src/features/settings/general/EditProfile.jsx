import UserProfile from "../../../ui/atoms/UserProfile";
import IconDoutone from "../../../ui/atoms/IconDoutone";

import { useThemeContext } from "../../../contexts/ThemeContext";
import { Pen2Icon } from "@solar-icons/react/line-duotone";
import { useSelector } from "react-redux";

const baseClasses = {
  div: `
  relative
  flex flex-col
  items-start
  w-full
  gap-2.5
  px-4 py-4
  rounded-lg
  bg-linear-to-b
  
  `,

  iconDoutone: `
  absolute
  bottom-0
  left-18
  cursor-pointer
  `,
};

function EditProfile() {
  const { type } = useThemeContext();
  const { userBackgroundColor } = useSelector((state) => state.settings);

  return (
    <div
      style={{
        "--profile-bg": userBackgroundColor,
      }}
      className={`
        ${
        type === "primary"
        ? "from-(--profile-bg) to-primary-100"
        : "from-(--profile-bg) to-secondary-500"
        }
        ${baseClasses.div}
      `}
    >
      <UserProfile token="xl" />

      <IconDoutone
        type={type}
        className={baseClasses.iconDoutone}
        Icon={Pen2Icon}
        size={35}
      />
    </div>
  );
}

export default EditProfile;
