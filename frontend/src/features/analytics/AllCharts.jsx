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
      <Chart token="md" type={selectedTypeInverse} chartType="bar" />
      <Chart token="md" type={selectedTypeInverse} chartType="dougnut" />
      <Chart token="md" type={selectedTypeInverse} chartType="area" />
      <Chart token="md" type={selectedTypeInverse} chartType="line" />
      <Chart token="md" type={selectedTypeInverse} chartType="pie" />
      <Chart token="md" type={selectedTypeInverse} chartType="bar" />
    </section>
  );
}

export default AllCharts;
