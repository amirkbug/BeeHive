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
    <aside className="flex h-full max-w-24 flex-col items-center justify-center gap-5 px-2 pt-12 pb-4">
      <Link to="/app/aboutus" className="absolute top-5">
        <Logo logoType="primaryWithoutPolygone" token="XLL" />
      </Link>
      <section className="bg-primary-100 flex h-full flex-col items-center justify-start gap-2 rounded-lg px-2 py-10">
        <Logo logoType="secondary" type="primary" token="XL" />
        <Lines orientation="vertical" />
        <UserProfile token="LG" />
        <Link to="/app/dashboard">
          <FloatingButtons type="primary" token="SM" Icon={HomeIcon} />
        </Link>
        <Link to="/app/analytics">
          <FloatingButtons type="primary" token="SM" Icon={ChartIcon} />
        </Link>
        <Link to="/app/data">
          <FloatingButtons type="primary" token="SM" Icon={DatabaseIcon} />
        </Link>
      </section>
      <section className="flex items-center justify-center gap-4">
        <Link to="/app/settings">
          <FloatingButtons type="primary" token="SM" Icon={SettingsIcon} />
        </Link>
      </section>
    </aside>
  );
}

export default SideBar;
