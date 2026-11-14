import Kpi from "../../../ui/organs/Kpi";

import {
  DangerTriangleIcon,
  GraphUpIcon,
  WalletMoneyIcon,
} from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../../contexts/ThemeContext";

const baseClasses = {
  secondSection: `
    overflow-x-scroll
    flex flex-row
    items-center justify-between
    w-full
    gap-2.5
    px-4 py-4
    `,
};

function KpiPreview() {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <article
      className={`
        ${selectedTypeInverse === "primary" ? "bg-secondary-400" : "bg-background-light"}
        ${baseClasses.secondSection}
      `}
    >
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
    </article>
  );
}

export default KpiPreview;
