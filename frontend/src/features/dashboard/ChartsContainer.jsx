import Charts from "./Charts";

const baseClasses = {
  div: `
  overflow-x-hidden
  w-full h-full
  mt-4
  `,

  section: `
  flex flex-col flex-1
  justify-between
  w-full
  `,
};

function ChartsContainer() {
  return (
    <div className={baseClasses.div}>
      <section className={baseClasses.section}>
        <Charts
          token="lg"
          type="secondary"
          chartTypes={["scatter", "dougnut", "bar"]}
        />
        <Charts
          token="lg"
          type="secondary"
          chartTypes={["pie", "line", "area"]}
        />
      </section>
    </div>
  );
}

export default ChartsContainer;
