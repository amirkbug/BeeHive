import ChartsSection from "./ChartsSection";
import KpiSection from "./KpiSection";

const baseClasses = {
  section: `
    overflow-x-hidden
    flex flex-col
    items-center justify-start
    w-full h-full
    px-4
    gap-20
    `,
};

function Customazation() {
  return (
    <section className={baseClasses.section}>
      <KpiSection />
      <ChartsSection />
    </section>
  );
}

export default Customazation;
