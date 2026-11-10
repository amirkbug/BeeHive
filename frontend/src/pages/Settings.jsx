import Button from "../ui/molecules/Button";

import {
  SettingsMinimalisticIcon,
  BellIcon,
  PaletteRoundIcon,
  ChartSquareIcon,
  InfoCircleIcon,
} from "@solar-icons/react/line-duotone";
import { NavLink, Outlet } from "react-router-dom";
import IconDoutone from "../ui/atoms/IconDoutone";
function Settings() {
  return (
    <div
      className="
        w-full h-full
        py-3
        pl-4
      "
    >
      <section
        className="
          w-full h-full
          px-6 py-5
          rounded-lg
          bg-primary-100
        "
      >
        <main
          className="
            flex flex-row
            items-center justify-start
            w-full h-full
            gap-4
            p-2.5
          "
        >
          <nav
            className="
              flex flex-col shrink-0
              items-start justify-start
              h-full
              gap-8
              px-4
              pb-4
            "
          >
            <NavLink
              className="
                w-full
                group
              "
              to="general"
            >
              <Button
                className="
                  justify-start
                  w-full
                "
                type="secondary"
                token="lg"
              >
                <IconDoutone
                  Icon={SettingsMinimalisticIcon}
                  size={20}
                  type="secondary"
                />
                General
              </Button>
            </NavLink>
            <NavLink
              className="
                w-full
                group
              "
              to="notifications"
            >
              <Button
                className="
                  justify-start
                  w-full
                "
                type="secondary"
                token="lg"
              >
                <IconDoutone Icon={BellIcon} size={20} type="secondary" />
                Notifacation
              </Button>
            </NavLink>
            <NavLink
              className="
                w-full
                group
              "
              to="customazation"
            >
              <Button
                className="
                  justify-start
                  w-full
                "
                type="secondary"
                token="lg"
              >
                <IconDoutone
                  Icon={PaletteRoundIcon}
                  size={20}
                  type="secondary"
                />
                Customazation
              </Button>
            </NavLink>
            <NavLink
              className="
                w-full
                group
              "
              to="kpi-management"
            >
              <Button
                className="
                  justify-start
                  w-full
                "
                type="secondary"
                token="lg"
              >
                <IconDoutone
                  Icon={ChartSquareIcon}
                  size={20}
                  type="secondary"
                />
                KPI Management
              </Button>
            </NavLink>
            <NavLink
              className="
                w-full
                group
              "
              to="about-us"
            >
              <Button
                className="
                  justify-start
                  w-full
                "
                type="secondary"
                token="lg"
              >
                <IconDoutone Icon={InfoCircleIcon} size={20} type="secondary" />
                About Us
              </Button>
            </NavLink>
          </nav>
          <Outlet />
        </main>
      </section>
    </div>
  );
}

export default Settings;
