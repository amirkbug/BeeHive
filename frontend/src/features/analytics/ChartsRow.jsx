import ChartRowTitle from "./ChartRowTitle";
import AllCharts from "./AllCharts";

import { CalendarDateIcon } from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../contexts/ThemeContext";

const baseClasses = {
  firstDiv: `
    flex flex-col
    items-center justify-start
    w-full
    pl-1
`,
};

function ChartsRow({ time = "Daily", Icon = CalendarDateIcon }) {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <div className={baseClasses.firstDiv}>
      <ChartRowTitle
        selectedTypeInverse={selectedTypeInverse}
        Icon={Icon}
        time={time}
      />
      <AllCharts />
    </div>
  );
}

export default ChartsRow;
