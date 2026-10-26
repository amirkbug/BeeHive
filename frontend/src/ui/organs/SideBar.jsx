import { HomeIcon } from "@solar-icons/react/linear/home";
import { ChartIcon } from "@solar-icons/react/linear/chart";
import { DatabaseIcon } from "@solar-icons/react/linear/database";
import { SettingsIcon } from "@solar-icons/react/linear/settings";
import { Link } from "react-router-dom";

import FloatingButtons from "../atoms/FloatingButtons";
import Logo from "../atoms/Logo";
import Lines from "../atoms/Lines";
import UserProfile from "../atoms/UserProfile";

function SideBar() {
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
        className="
          flex flex-col
          items-center justify-start
          h-full
          gap-2
          px-2 py-10
          rounded-lg
          bg-primary-100
        "
      >
        <Logo logoType="secondary" type="primary" token="xl" />
        <Lines orientation="vertical" />
        <UserProfile token="lg" />
        <Link to="/app/dashboard">
          <FloatingButtons type="primary" token="sm" Icon={HomeIcon} />
        </Link>
        <Link to="/app/analytics">
          <FloatingButtons type="primary" token="sm" Icon={ChartIcon} />
        </Link>
        <Link to="/app/data">
          <FloatingButtons type="primary" token="sm" Icon={DatabaseIcon} />
        </Link>
      </section>
      <section
        className="
          flex
          items-center justify-center
          gap-4
        "
      >
        <Link to="/app/settings">
          <FloatingButtons type="primary" token="sm" Icon={SettingsIcon} />
        </Link>
      </section>
    </aside>
  );
}

export default SideBar;
