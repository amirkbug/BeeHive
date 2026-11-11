import Logo from "../atoms/Logo";
import Line from "../atoms/Line";
import UserLogoPreview from "../../features/authentication/UserLogoPreview";
import SideBarButton from "./SideBarButton";
import IconDoutone from "../atoms/IconDoutone";

import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";
import {
  HomeIcon,
  ChartIcon,
  DatabaseIcon,
} from "@solar-icons/react/line-duotone";

//Objects for diffrent variations
const types = {
  primary: "bg-primary-100",
  secondary: "bg-secondary-500",
};

//Base classes
const baseClasses = {
  section: `
  flex flex-col
  items-center justify-start
  h-full w-full
  gap-2
  px-2 py-10
  rounded-lg
  items-start
  min-w-14
  transition-all
  group-hover/sidebar:min-w-80.5 group-hover/sidebar:shadow-300-BoxShadowM
  sidebar-main
  `,

  logo: `
  self-center
  `,

  navLink: `
  group
  `,
};

function SideBarNavigationButtons() {
  const { selectedTypeInverse, type } = useThemeContext();

  return (
    <section
      className={`
        ${baseClasses.section}
        ${types[type]}
      `}
    >
      <Logo
        className={baseClasses.logo}
        logoType="secondary"
        type={type}
        token="xl"
      />
      <Line orientation="vertical" />

      <UserLogoPreview />

      <NavLink className={baseClasses.navLink} to="/app/dashboard">
        <SideBarButton type={selectedTypeInverse} Icon={HomeIcon}>
          <IconDoutone Icon={HomeIcon} size={20} type={selectedTypeInverse} />
          Home
        </SideBarButton>
      </NavLink>
      <NavLink className={baseClasses.navLink} to="/app/analytics">
        <SideBarButton type={selectedTypeInverse} Icon={ChartIcon}>
          <IconDoutone Icon={ChartIcon} size={20} type={selectedTypeInverse} />
          Analytics
        </SideBarButton>
      </NavLink>
      <NavLink className={baseClasses.navLink} to="/app/data">
        <SideBarButton type={selectedTypeInverse} Icon={DatabaseIcon}>
          <IconDoutone
            Icon={DatabaseIcon}
            size={20}
            type={selectedTypeInverse}
          />
          Data
        </SideBarButton>
      </NavLink>
    </section>
  );
}

export default SideBarNavigationButtons;
