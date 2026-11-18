import Button from "../../ui/molecules/Button";
import IconDoutone from "../../ui/atoms/IconDoutone";
import Line from "../../ui/atoms/Line";

import {
  CalendarIcon,
  ClockCircleIcon,
  CalendarMarkIcon,
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
  `,
  line: `
  flex-1
  ml-4!
  `,
};

const buttonsContentTemp = [
  { title: "Past month", to: "past_month", Icon: CalendarMarkIcon },
  { title: "Past week", to: "past_week", Icon: CalendarIcon },
  { title: "Today", to: "today", Icon: ClockCircleIcon },
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
