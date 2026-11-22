import Chart from "../../../ui/molecules/Chart";

import { useThemeContext } from "../../../contexts/ThemeContext";

const tempTypes = ["bar", "dougnut", "area"];

const baseClasses = {
  section: `
    overflow-x-auto
    flex flex-row
    items-center justify-between
    w-full h-fit
    gap-4
    px-4 py-4
    `,
};

function ChartsPreview({ types = tempTypes }) {
  const { selectedTypeInverse } = useThemeContext();
  return (
    <article
      className={`
        ${baseClasses.section}
        ${selectedTypeInverse === "primary" ? "bg-secondary-400" : "bg-background-light"}
      `}
    >
      {types.map((type) => (
        <Chart
          key={type}
          token="md"
          type={selectedTypeInverse}
          chartType={type}
        />
      ))}
    </article>
  );
}

export default ChartsPreview;
