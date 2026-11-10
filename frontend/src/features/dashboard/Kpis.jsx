import { useThemeContext } from "../../contexts/ThemeContext";
import Kpi from "../../ui/organs/Kpi";

import {
  WalletMoneyIcon,
  GraphUpIcon,
  DangerTriangleIcon,
} from "@solar-icons/react/line-duotone";

const baseClasses = {
  section: `
  overflow-x-auto
  flex flex-row shrink-0
  items-center justify-between
  w-full h-fit
  gap-5
  py-5
  pl-4
  `,
};

function KpisDashboard() {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <section className={baseClasses.section}>
      <Kpi
        chartValue={30}
        token="md"
        type={selectedTypeInverse}
        kpiType="warning"
        KpiIconName={WalletMoneyIcon}
        SubTxtIcon={null}
        title="Revenue at Risk"
        number="$9,923"
        subtxt="Potential revenue at risk."
      />

      <Kpi
        chartValue={85}
        token="md"
        type={selectedTypeInverse}
        kpiType="success"
        KpiIconName={GraphUpIcon}
        SubTxtIcon={null}
        title="Revenue Growth"
        number="+18.6%"
        subtxt="Revenue increased this month."
      />

      <Kpi
        chartValue={15}
        token="md"
        type={selectedTypeInverse}
        kpiType="destructive"
        KpiIconName={DangerTriangleIcon}
        SubTxtIcon={null}
        title="Critical Issues"
        number="24"
        subtxt="Issues require immediate attention."
      />
    </section>
  );
}

export default KpisDashboard;
