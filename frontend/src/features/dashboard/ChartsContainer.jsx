import Charts from "./Charts";

function ChartsContainer() {
  return (
    <div
      className="
        overflow-x-hidden
        w-full h-full
        mt-4
      "
    >
      <section
        className="
          flex flex-col flex-1
          justify-between
          w-full
        "
      >
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
