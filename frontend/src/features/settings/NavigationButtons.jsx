import Button from "../../ui/molecules/Button";
import IconDoutone from "../../ui/atoms/IconDoutone";

import {
  SettingsMinimalisticIcon,
  BellIcon,
  PaletteRoundIcon,
  ChartSquareIcon,
  InfoCircleIcon,
} from "@solar-icons/react/line-duotone";
import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";

const baseClasses = {
  nav: `
  flex flex-col shrink-0
  items-start justify-start
  h-full
  gap-8
  px-4 
  pr-7
  pb-4
  border-r
  `,

  navLink: `
  w-full
  group
  `,

  button: `
  justify-start
  w-full
  `,
};

function SettingsNavigationButtons() {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <nav
      className={`
        ${selectedTypeInverse === "primary" ? "border-primary-100/10" : "border-secondary-500/10"}
        ${baseClasses.nav}
      `}
    >
      <NavLink className={baseClasses.navLink} to="/app/settings" end>
        <Button
          className={baseClasses.button}
          type={selectedTypeInverse}
          token="lg"
        >
          <IconDoutone
            Icon={SettingsMinimalisticIcon}
            size={20}
            type={selectedTypeInverse}
          />
          General
        </Button>
      </NavLink>
      <NavLink className={baseClasses.navLink} to="notifications">
        <Button
          className={baseClasses.button}
          type={selectedTypeInverse}
          token="lg"
        >
          <IconDoutone Icon={BellIcon} size={20} type={selectedTypeInverse} />
          Notifacation
        </Button>
      </NavLink>
      <NavLink className={baseClasses.navLink} to="customazation">
        <Button
          className={baseClasses.button}
          type={selectedTypeInverse}
          token="lg"
        >
          <IconDoutone
            Icon={PaletteRoundIcon}
            size={20}
            type={selectedTypeInverse}
          />
          Customazation
        </Button>
      </NavLink>
      <NavLink className={baseClasses.navLink} to="kpi-management">
        <Button
          className={baseClasses.button}
          type={selectedTypeInverse}
          token="lg"
        >
          <IconDoutone
            Icon={ChartSquareIcon}
            size={20}
            type={selectedTypeInverse}
          />
          KPI Management
        </Button>
      </NavLink>
      <NavLink className={baseClasses.navLink} to="about-us">
        <Button
          className={baseClasses.button}
          type={selectedTypeInverse}
          token="lg"
        >
          <IconDoutone
            Icon={InfoCircleIcon}
            size={20}
            type={selectedTypeInverse}
          />
          About Us
        </Button>
      </NavLink>
    </nav>
  );
}

export default SettingsNavigationButtons;
