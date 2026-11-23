import Form from "./Form";
import KpiPreview from "./KpiPreview";
import Explanations from "../../../ui/atoms/Explanations";
import Footer from "./Footer";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const baseClasses = {
  main: `
    flex flex-col
    w-full h-full
  `,
  content: `
    flex flex-col flex-1
    min-h-0
    overflow-y-auto
    gap-4
  `,
};

function KpiManegement() {
  const { id } = useParams();
  const kpiContents = useSelector((state) => state.settings.kpiContents);
  const selectedKpi = kpiContents.find((kpi) => String(kpi.id) === id);

  return (
    <main className={baseClasses.main}>
      <div className={baseClasses.content}>
        <Explanations title="Customize your KPI metrics.">
          <p>
            Choose which connected data sources and metrics your KPIs are based
            on, and configure the values you want to track on your dashboard.
          </p>
        </Explanations>
        <KpiPreview selectedKpi={selectedKpi} />
        <Form key={id} selectedKpi={selectedKpi} />
      </div>
      <Footer />
    </main>
  );
}

export default KpiManegement;
