import Kpi from "../../ui/organs/Kpi";

import { useThemeContext } from "../../contexts/ThemeContext";
import { useSelector } from "react-redux";
import { formatKpiNumber, getKpiType } from "../../utils/kpiHelpers";
import { useSearchParams } from "react-router-dom";

const baseClasses = {
  section: `
  overflow-x-auto
  flex flex-row shrink-0
  items-center justify-between
  w-full h-fit
  gap-5
  py-5
  pl-5
  pr-10
  `,
};

function KpisDashboard() {
  const { selectedTypeInverse } = useThemeContext();
  const [searchParams] = useSearchParams();
  const targetPeriod = searchParams.get("period") || "monthly";
  const kpiContents = useSelector((state) => state.settings.kpiContents);
  return (
    <section className={baseClasses.section}>
      {kpiContents.map((kpi) => {
        const target = kpi.targets[targetPeriod];
        const value = Number(kpi.number);
        const chartValue =
          target > 0 ? Math.floor(Math.min((value / target) * 100, 100)) : 0;
        return (
          <Kpi
            key={kpi.id}
            chartValue={chartValue}
            token="md"
            type={selectedTypeInverse}
            kpiType={getKpiType(chartValue)}
            KpiIconName={kpi.icon}
            SubTxtIcon={null}
            title={kpi.title}
            number={formatKpiNumber(value, kpi.numberFormat)}
            subtxt={kpi.kpiCaption}
          />
        );
      })}
    </section>
  );
}

export default KpisDashboard;
