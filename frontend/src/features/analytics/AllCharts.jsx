import Chart from "../../ui/molecules/Chart";

const baseClasses = {
  section: `
    overflow-x-auto
    flex flex-row
    items-center justify-start
    w-full
    gap-4
    py-3
    pl-4
    pr-10
    `,
};

function AllCharts({ selectedTypeInverse }) {
  return (
    <section className={baseClasses.section}>
      <Chart token="sm" type={selectedTypeInverse} chartType="bar" />
      <Chart token="sm" type={selectedTypeInverse} chartType="dougnut" />
      <Chart token="sm" type={selectedTypeInverse} chartType="area" />
      <Chart token="sm" type={selectedTypeInverse} chartType="line" />
      <Chart token="sm" type={selectedTypeInverse} chartType="pie" />
      <Chart token="sm" type={selectedTypeInverse} chartType="bar" />
    </section>
  );
}

export default AllCharts;
