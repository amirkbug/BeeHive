import Chart from "../ui/molecules/Chart";

function Analytics() {
  return (
    <main
      className="
        flex flex-col
        gap-8
        p-8
      "
    >
      <h1
        className="
          text-28px text-secondary-500 font-bold
        "
      >
        Analytics
      </h1>

      {/* Large Charts */}
      <section
        className="
          flex flex-wrap
          items-start
          gap-6
        "
      >
        <Chart chartType="bar" token="lg" type="primary" />
        <Chart chartType="line" token="lg" type="primary" />
      </section>

      {/* Medium Charts */}
      <section
        className="
          flex flex-wrap
          items-start
          gap-6
        "
      >
        <Chart chartType="scatter" token="md" type="secondary" />
        <Chart chartType="donut" token="md" type="primary" />
      </section>

      {/* Small Charts */}
      <section
        className="
          flex flex-wrap
          items-start
          gap-6
        "
      >
        <Chart chartType="pie" token="sm" type="secondary" />
        <Chart chartType="bar" token="sm" type="secondary" />
      </section>
    </main>
  );
}

export default Analytics;
