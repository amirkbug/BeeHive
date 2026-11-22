import KpiForm from "./KpiForm";
import KpiPreview from "./KpiPreview";
import Explanations from "../../../ui/atoms/Explanations";
import KpiPagination from "./KpiPagination";

const baseClasses = {
  section: `
  overflow-y-auto
  flex flex-col
   justify-between
  w-full h-full
  gap-6
  px-4
  `,
};

function KpiManegement() {
  return (
    <section className={baseClasses.section}>
      <Explanations title="Customize your KPI metrics.">
        <p>
          Choose which connected data sources and metrics your KPIs are based
          on, and configure the values you want to track on your dashboard.
        </p>
      </Explanations>
      <KpiPreview />
      <KpiForm />
      <KpiPagination />
    </section>
  );
}

export default KpiManegement;
