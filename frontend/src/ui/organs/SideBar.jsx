import Logo from "../atoms/Logo";
import Line from "../atoms/Line";
import UserLogoPreview from "../../features/authentication/UserLogoPreview";
import SideBarButton from "../molecules/SideBarButton";

import {
  HomeIcon,
  ChartIcon,
  DatabaseIcon,
  SettingsIcon,
} from "@solar-icons/react/line-duotone";
import { NavLink, Link } from "react-router-dom";
import IconDoutone from "../atoms/IconDoutone";
import { useThemeContext } from "../../contexts/ThemeContext";

//Objects for diffrent variations
const types = {
  primary: "bg-primary-100",
  secondary: "bg-secondary-500",
};

const mainSectionBase = `
  flex flex-col
  items-center justify-start
  h-full w-full
  gap-2
  px-2 py-10
  rounded-lg
  `;

function SideBar() {
  //Error boundry
  const { type, selectedTypeInverse } = useThemeContext();

  const selectedType = Object.hasOwn(types, type) ? type : "primary";

  //Component itself
  return (
    <aside
      className="
        flex flex-col
        items-center justify-center
        w-fit h-full
        gap-5
        px-2 pt-12
        pb-3
      "
    >
      <Link
        to="/app/aboutus"
        className="
          absolute
          top-5
        "
      >
        <Logo logoType="primaryWithoutPolygone" token="xll" />
      </Link>
      <div
        className="
          flex flex-col
          h-full
          gap-5
          group/sidebar
        "
      >
        <section
          className={`
            items-start
            min-w-14
            transition-all
            group-hover/sidebar:min-w-80.5 group-hover/sidebar:shadow-300-BoxShadowM
            sidebar-main
            ${mainSectionBase}
            ${types[selectedType]}
          `}
        >
          <Logo
            className="
              self-center
            "
            logoType="secondary"
            type={selectedType}
            token="xl"
          />
          <Line orientation="vertical" />

          <UserLogoPreview />

          <NavLink
            className="
              group
            "
            to="/app/dashboard"
          >
            <SideBarButton type={selectedTypeInverse} Icon={HomeIcon}>
              <IconDoutone
                Icon={HomeIcon}
                size={20}
                type={selectedTypeInverse}
              />
              Home
            </SideBarButton>
          </NavLink>
          <NavLink
            className="
              group
            "
            to="/app/analytics"
          >
            <SideBarButton type={selectedTypeInverse} Icon={ChartIcon}>
              <IconDoutone
                Icon={ChartIcon}
                size={20}
                type={selectedTypeInverse}
              />
              Analytics
            </SideBarButton>
          </NavLink>
          <NavLink
            className="
              group
            "
            to="/app/data"
          >
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
        <section
          className="
            flex
            items-start justify-start self-start
            gap-4
            pl-2
          "
        >
          <NavLink
            className="
              group
            "
            to="/app/settings"
          >
            <SideBarButton
              className="
                group-hover/sidebar:w-80.5!
                -translate-x-4!
              "
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
      </div>
    </aside>
  );
}

export default SideBar;
