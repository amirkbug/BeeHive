import Line from "../../ui/atoms/Line";

import {
  CalendarIcon,
  CalendarMarkIcon,
  CalendarDateIcon,
  CalendarMinimalisticIcon,
} from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../contexts/ThemeContext";
import NavigationButton from "./NavigationButton";

const baseClasses = {
  nav: `
  flex flex-row
  items-center justify-end
  w-full
  gap-2
  pt-4
  pr-10
  pl-1
  `,
  line: `
  flex-1
  ml-4!
  `,
};

const buttonsContentTemp = [
  {
    title: "Past year",
    to: "yearly",
    Icon: CalendarMarkIcon,
  },
  {
    title: "Past month",
    to: "monthly",
    Icon: CalendarMinimalisticIcon,
  },
  {
    title: "Past week",
    to: "weekly",
    Icon: CalendarIcon,
  },
  {
    title: "Today",
    to: "daily",
    Icon: CalendarDateIcon,
  },
];

function NavigationButtons() {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <nav className={baseClasses.nav}>
      <Line className={baseClasses.line} />
      {buttonsContentTemp.map((content) => (
        <NavigationButton
          key={content.to}
          selectedTypeInverse={selectedTypeInverse}
          content={content}
        />
      ))}
    </nav>
  );
}

export default NavigationButtons;
