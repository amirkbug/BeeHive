import Chart from "../../../ui/molecules/Chart";

import { useThemeContext } from "../../../contexts/ThemeContext";

const baseClasses = {
  section: `
    overflow-x-auto
    flex flex-row
    items-center justify-start
    w-full h-fit
    gap-4
    px-4 py-4
    `,
};

function ChartsPreview() {
  const { selectedTypeInverse } = useThemeContext();
  return (
    <article
      className={`
        ${baseClasses.section}
        ${selectedTypeInverse === "primary" ? "bg-secondary-400" : "bg-background-light"}
      `}
    >
      <Chart token="md" type={selectedTypeInverse} chartType="bar" />
      <Chart token="md" type={selectedTypeInverse} chartType="dougnut" />
      <Chart token="md" type={selectedTypeInverse} chartType="area" />
      <Chart token="md" type={selectedTypeInverse} chartType="line" />
      <Chart token="md" type={selectedTypeInverse} chartType="pie" />
      <Chart token="md" type={selectedTypeInverse} chartType="bar" />
    </article>
  );
}

export default ChartsPreview;
