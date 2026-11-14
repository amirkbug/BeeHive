import Kpi from "../../../ui/organs/Kpi";

import { WalletMoneyIcon } from "@solar-icons/react/line-duotone";
import { useThemeContext } from "../../../contexts/ThemeContext";

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
  const { selectedTypeInverse } = useThemeContext();
  return (
    <article className={baseClasses.article}>
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
    </article>
  );
}

export default KpiPreview;
