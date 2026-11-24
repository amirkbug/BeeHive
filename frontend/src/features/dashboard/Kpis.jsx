import Kpi from "../../ui/organs/Kpi";

import { useThemeContext } from "../../contexts/ThemeContext";
import { useSelector } from "react-redux";
import {
  chartValue,
  formatKpiNumber,
  getKpiType,
  kpiIconName,
  kpiNumberBaseOnDataSource,
} from "../../utils/kpiHelpers";
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
        const value = kpiNumberBaseOnDataSource(kpi.dataSource);
        const progress = chartValue(target, value, kpi.trendDirection);
        const kpiIcon = kpiIconName(kpi.icon);
        return (
          <Kpi
            key={kpi.id}
            chartValue={progress}
            token="md"
            type={selectedTypeInverse}
            kpiType={getKpiType(progress)}
            KpiIconName={kpiIcon}
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
