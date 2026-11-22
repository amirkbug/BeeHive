import ChartsRow from "../features/analytics/ChartsRow";

import {
  CalendarDateIcon,
  CalendarMarkIcon,
  CalendarIcon,
  CalendarMinimalisticIcon,
} from "@solar-icons/react/line-duotone";

const baseClasses = {
  section: `
  overflow-x-auto
  flex flex-col
  items-center justify-between
  w-full h-full
  pt-4
`,
};

function Analytics() {
  return (
    <section className={baseClasses.section}>
      <ChartsRow time="Past year" Icon={CalendarMarkIcon} />
      <ChartsRow time="Past month" Icon={CalendarMinimalisticIcon} />
      <ChartsRow time="Past week" Icon={CalendarIcon} />
      <ChartsRow time="Today" Icon={CalendarDateIcon} />
    </section>
  );
}

export default Analytics;
