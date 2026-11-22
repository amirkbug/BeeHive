import ColorInputs from "./ColorInputs";
import KpisPreview from "./KpisPreview";
import Explanations from "./Explanations";

import { setFeedbackColor } from "../settingsSlice";
import { useSelector } from "react-redux";

const mainColors = [
  {
    title: "Success",
    subTitle: "Main color for success.",
    token: "lg",
    colorState: "successColor",
  },
  {
    title: "Warning",
    subTitle: "Main color for warnings.",
    token: "lg",
    colorState: "warningColor",
  },
  {
    title: "Destructure",
    subTitle: "Main color for errors.",
    token: "lg",
    colorState: "destructiveColor",
  },
];
const secondaryColors = [
  {
    title: "Secondary success",
    subTitle: "Secondary color for success.",
    token: "lg",
    colorState: "successColorSecondary",
  },
  {
    title: "Secondary warning",
    subTitle: "Secondary color for warnings.",
    token: "lg",
    colorState: "warningColorSecondary",
  },
  {
    title: "Secondary destructure",
    subTitle: "Secondary color for errors.",
    token: "lg",
    colorState: "destructiveColorSecondary",
  },
];

const baseClasses = {
  div: `
    flex flex-col
    w-full
    gap-7
    `,
};

function KpiSection() {
  const { statusColors } = useSelector((state) => state.settings);
  return (
    <div className={baseClasses.div}>
      <Explanations title="Customize KPI Status Colors">
        <p>
          Personalize the colors used to represent different KPI statuses,
          including success, warning, and destructive states. Your selected
          colors will be applied consistently across KPI indicators throughout
          the dashboard.
        </p>
      </Explanations>
      <KpisPreview />
      <ColorInputs
        action={setFeedbackColor}
        colorStateObj={statusColors}
        contents={mainColors}
      />
      <ColorInputs
        action={setFeedbackColor}
        colorStateObj={statusColors}
        contents={secondaryColors}
      />
    </div>
  );
}

export default KpiSection;
