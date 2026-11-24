import Kpi from "../../../ui/organs/Kpi";

import { useThemeContext } from "../../../contexts/ThemeContext";
import {
  chartValue,
  formatKpiNumber,
  getKpiType,
  kpiIconName,
  kpiNumberBaseOnDataSource,
} from "../../../utils/kpiHelpers";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//Base classes
const baseClasses = {
  article: `
    flex flex-col
    items-center justify-center
    w-full
    gap-2.5
    py-4
    bg-secondary-400
    `,
};

//Component itself
function KpiPreview() {
  const { id } = useParams();
  const { selectedTypeInverse } = useThemeContext();

  const kpiContents = useSelector((state) => state.settings.kpiContents);
  const selectedKpi = kpiContents.find((kpi) => String(kpi.id) === id);
  const target = selectedKpi.targets.daily;
  const value = kpiNumberBaseOnDataSource(selectedKpi.dataSource);
  const progress = chartValue(target, value, selectedKpi.trendDirection);
  const kpiIcon = kpiIconName(selectedKpi.icon);

  return (
    <article className={baseClasses.article}>
      <Kpi
        key={selectedKpi.id}
        chartValue={progress}
        token="md"
        type={selectedTypeInverse}
        kpiType={getKpiType(progress)}
        KpiIconName={kpiIcon}
        SubTxtIcon={null}
        title={selectedKpi.title}
        number={formatKpiNumber(value, selectedKpi.numberFormat)}
        subtxt={selectedKpi.kpiCaption}
      />
    </article>
  );
}

export default KpiPreview;
