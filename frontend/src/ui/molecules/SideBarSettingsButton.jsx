import SideBarButton from "./SideBarButton";
import IconDoutone from "../atoms/IconDoutone";

import { NavLink } from "react-router-dom";
import { SettingsIcon } from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../contexts/ThemeContext";

const baseClasses = {
  secondSection: `
  flex
  items-start justify-start self-start
  gap-4
  pl-2
  `,

  navLink: `
  group
  `,

  sideBarButton: `
  group-hover/sidebar:w-80.5!
  -translate-x-4!
  `,
};

function SideBarSettingsButton() {
  const { selectedTypeInverse } = useThemeContext();
  return (
    <section className={baseClasses.secondSection}>
      <NavLink className={baseClasses.navLink} to="/app/settings">
        <SideBarButton
          className={baseClasses.sideBarButton}
          type={selectedTypeInverse}
          Icon={SettingsIcon}
        >
          <IconDoutone
            Icon={SettingsIcon}
            size={20}
            type={selectedTypeInverse}
          />
          Settings
        </SideBarButton>
      </NavLink>
    </section>
  );
}

export default SideBarSettingsButton;
