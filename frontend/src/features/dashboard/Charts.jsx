import { useThemeContext } from "../../contexts/ThemeContext";
import Chart from "../../ui/molecules/Chart";

const baseClasses = {
  section: `
  overflow-x-auto
  flex flex-row
  justify-between
  w-full
  gap-4
  py-4
  pl-4
`,
};

function Charts({ chartTypes = ["scatter", "dougnut", "bar"], token = "lg" }) {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <section className={baseClasses.section}>
      <Chart
        chartType={chartTypes.at(0)}
        type={selectedTypeInverse}
        token={token}
      />
      <Chart
        chartType={chartTypes.at(1)}
        type={selectedTypeInverse}
        token={token}
      />
      <Chart
        chartType={chartTypes.at(2)}
        type={selectedTypeInverse}
        token={token}
      />
    </section>
  );
}

export default Charts;
