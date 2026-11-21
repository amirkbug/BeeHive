import KpiColorInputs from "./KpiColorInputs";
import KpisPreview from "./KpisPreview";

const kpiPreviewContents = [
  {
    title: "Success",
    subTitle: "Color for success.",
    token: "lg",
    color: "#55C271",
    feedBackField: "successColor",
  },
  {
    title: "Warning",
    subTitle: "Color for warnings.",
    token: "lg",
    color: "#7D5E0F",
    feedBackField: "warningColor",
  },
  {
    title: "Destructure",
    subTitle: "Color for errors.",
    token: "lg",
    color: "#E75F5F",
    feedBackField: "destructiveColor",
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
  return (
    <div className={baseClasses.div}>
      <KpisPreview />
      <KpiColorInputs contents={kpiPreviewContents} />
    </div>
  );
}

export default KpiSection;
