import Button from "../../ui/molecules/Button";
import IconDoutone from "../../ui/atoms/IconDoutone";
import Chart from "../../ui/molecules/Chart";

import { CalendarDateIcon } from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../contexts/ThemeContext";

const baseClasses = {
  firstDiv: `
    flex flex-col
    items-center justify-start
    w-full
`,

  secondDiv: `
    w-full
    pl-4`,

  button: `
    justify-start
    w-full
    `,

  section: `
    overflow-x-auto
    flex flex-row
    items-center justify-start
    w-full
    gap-4
    py-3
    pl-4
    `,
};

function ChartsRow({ time = "Daily", Icon = CalendarDateIcon }) {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <div className={baseClasses.firstDiv}>
      <div className={baseClasses.secondDiv}>
        <Button
          className={baseClasses.button}
          token="sm"
          type={selectedTypeInverse}
          disabled
        >
          <IconDoutone type={selectedTypeInverse} size={16} Icon={Icon} />{" "}
          {time}
        </Button>
      </div>
      <section className={baseClasses.section}>
        <Chart token="md" type={selectedTypeInverse} chartType="bar" />
        <Chart token="md" type={selectedTypeInverse} chartType="dougnut" />
        <Chart token="md" type={selectedTypeInverse} chartType="area" />
        <Chart token="md" type={selectedTypeInverse} chartType="line" />
        <Chart token="md" type={selectedTypeInverse} chartType="pie" />
        <Chart token="md" type={selectedTypeInverse} chartType="bar" />
      </section>
    </div>
  );
}

export default ChartsRow;
