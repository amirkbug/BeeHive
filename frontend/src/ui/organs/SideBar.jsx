import {
  HomeIcon,
  ChartIcon,
  DatabaseIcon,
  SettingsIcon,
} from "@solar-icons/react/line-duotone";
import { NavLink, Link } from "react-router-dom";

import FloatingButton from "../atoms/FloatingButton";
import Logo from "../atoms/Logo";
import Line from "../atoms/Line";
import UserProfile from "../atoms/UserProfile";

const types = {
  primary: "bg-primary-100",
  secondary: "bg-secondary-500",
};

const mainSectionBase = `
  flex flex-col
  items-center justify-start
  h-full
  gap-2
  px-2 py-10
  rounded-lg
  `;

function SideBar({ type = "primary" }) {
  const selectedType = Object.hasOwn(types, type) ? type : "primary";

  return (
    <aside
      className="
        flex flex-col
        items-center justify-center
        h-full max-w-24
        gap-5
        px-2 pt-12
        pb-4
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
      <section
        className={`
          ${mainSectionBase}
          ${types[selectedType]}
        `}
      >
        <Logo logoType="secondary" type={selectedType} token="xl" />
        <Line orientation="vertical" />
        <UserProfile token="lg" />
        <NavLink
          className="
            group
          "
          to="/app/dashboard"
        >
          <FloatingButton type={selectedType} token="sm" Icon={HomeIcon} />
        </NavLink>
        <NavLink
          className="
            group
          "
          to="/app/analytics"
        >
          <FloatingButton type={selectedType} token="sm" Icon={ChartIcon} />
        </NavLink>
        <NavLink
          className="
            group
          "
          to="/app/data"
        >
          <FloatingButton type={selectedType} token="sm" Icon={DatabaseIcon} />
        </NavLink>
      </section>
      <section
        className="
          flex
          items-center justify-center
          gap-4
        "
      >
        <NavLink
          className="
            group
          "
          to="/app/settings"
        >
          <FloatingButton type={selectedType} token="sm" Icon={SettingsIcon} />
        </NavLink>
      </section>
    </aside>
  );
}

export default SideBar;
