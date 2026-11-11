import ChartsRow from "../features/analytics/ChartsRow";

import {
  CalendarDateIcon,
  CalendarMarkIcon,
  CalendarIcon,
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
      <ChartsRow time="Daily" Icon={CalendarDateIcon} />
      <ChartsRow time="Weekly" Icon={CalendarMarkIcon} />
      <ChartsRow time="Monthly" Icon={CalendarIcon} />
    </section>
  );
}

export default Analytics;
