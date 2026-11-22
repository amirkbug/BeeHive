import Line from "../../../ui/atoms/Line";
import ChartsSection from "./ChartsSection";
import KpiSection from "./KpiSection";

const baseClasses = {
  section: `
    overflow-x-hidden
    flex flex-col
    items-center justify-start
    w-full h-full
    px-4
    gap-10
    `,

  line: `
      shrink-0
    `,
};

function Customazation() {
  return (
    <section className={baseClasses.section}>
      <KpiSection />
      <Line className={baseClasses.line} />
      <ChartsSection />
    </section>
  );
}

export default Customazation;
