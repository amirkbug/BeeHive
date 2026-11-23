import Button from "../../ui/molecules/Button";
import IconDoutone from "../../ui/atoms/IconDoutone";

import { NavLink } from "react-router-dom";
import { useThemeContext } from "../../contexts/ThemeContext";
import {
  SettingsMinimalisticIcon,
  BellIcon,
  PaletteRoundIcon,
  ChartSquareIcon,
  InfoCircleIcon,
} from "@solar-icons/react/line-duotone";

const tempNavigationButtonsContent = [
  {
    to: "/app/settings",
    icon: SettingsMinimalisticIcon,
    content: "General",
    end: true,
  },
  {
    to: "notifications",
    icon: BellIcon,
    content: "Notifacation",
    end: false,
  },
  {
    to: "customazation",
    icon: PaletteRoundIcon,
    content: "Customazation",
    end: false,
  },
  {
    to: "kpi-management/1",
    icon: ChartSquareIcon,
    content: "KPI Management",
    end: false,
  },
  {
    to: "about-us",
    icon: InfoCircleIcon,
    content: "About Us",
    end: false,
  },
];

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

function NavigationButtons() {
  const { selectedTypeInverse } = useThemeContext();

  return tempNavigationButtonsContent.map((content) => (
    <NavLink
      key={content.content}
      className={baseClasses.navLink}
      to={content.to}
      end={content.end}
    >
      <Button
        className={baseClasses.button}
        type={selectedTypeInverse}
        token="lg"
      >
        <IconDoutone Icon={content.icon} size={20} type={selectedTypeInverse} />
        {content.content}
      </Button>
    </NavLink>
  ));
}

export default NavigationButtons;
