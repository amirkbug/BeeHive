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

function SideBar({ type = "primary" }) {
  //Error boundry
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
            group-hover/sidebar:min-w-80.5
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
            <SideBarButton Icon={HomeIcon}>
              <IconDoutone Icon={HomeIcon} size={20} type="secondary" />
              Home
            </SideBarButton>
          </NavLink>
          <NavLink
            className="
              group
            "
            to="/app/analytics"
          >
            <SideBarButton Icon={ChartIcon}>
              <IconDoutone Icon={ChartIcon} size={20} type="secondary" />
              Analytics
            </SideBarButton>
          </NavLink>
          <NavLink
            className="
              group
            "
            to="/app/data"
          >
            <SideBarButton Icon={DatabaseIcon}>
              <IconDoutone Icon={DatabaseIcon} size={20} type="secondary" />
              Data
            </SideBarButton>
          </NavLink>
        </section>
        <section
          className="
            flex
            justify-center self-start
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
            <SideBarButton Icon={SettingsIcon}>
              <IconDoutone Icon={SettingsIcon} size={20} type="secondary" />
              Settings
            </SideBarButton>
          </NavLink>
        </section>
      </div>
    </aside>
  );
}

export default SideBar;
