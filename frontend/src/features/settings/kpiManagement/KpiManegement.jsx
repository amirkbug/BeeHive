import KpiForm from "./KpiForm";
import KpiPreview from "./KpiPreview";

const baseClasses = {
  section: `
  overflow-y-auto
  flex flex-col
  items-center justify-between
  w-full h-full
  gap-6
  px-4
  `,
};

function KpiManegement() {
  return (
    <section className={baseClasses.section}>
      <KpiPreview />
      <KpiForm />
    </section>
  );
}

export default KpiManegement;
