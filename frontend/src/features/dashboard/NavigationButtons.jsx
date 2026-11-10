import Button from "../../ui/molecules/Button";
import IconDoutone from "../../ui/atoms/IconDoutone";
import Line from "../../ui/atoms/Line";

import { CalendarIcon, ClockCircleIcon } from "@solar-icons/react/line-duotone";
import { CalendarMarkIcon } from "@solar-icons/react/line-duotone/calendar-mark";
import { useThemeContext } from "../../contexts/ThemeContext";

function NavigationButtons() {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <nav
      className="
        flex flex-row
        items-center justify-end
        w-full
        gap-2
        pt-4
      "
    >
      <Line
        className="
          flex-1
          ml-4!
        "
      />
      <Button token="sm" type={selectedTypeInverse}>
        Past month
        <IconDoutone
          Icon={CalendarMarkIcon}
          size={16}
          type={selectedTypeInverse}
        />
      </Button>
      <Button token="sm" type={selectedTypeInverse}>
        Past week
        <IconDoutone Icon={CalendarIcon} size={16} type={selectedTypeInverse} />
      </Button>
      <Button token="sm" type={selectedTypeInverse}>
        Today
        <IconDoutone
          Icon={ClockCircleIcon}
          size={16}
          type={selectedTypeInverse}
        />
      </Button>
    </nav>
  );
}

export default NavigationButtons;
