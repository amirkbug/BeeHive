import ChartsPreview from "./ChartsPreview";
import KpiColorInputs from "./KpiColorInputs";

const chartsPreviewContents = [
  {
    title: "Primary",
    subTitle: "Main charts color.",
    token: "lg",
    color: "#F8F8F4",
  },
  {
    title: "Secondary",
    subTitle: "secondary charts color..",
    token: "lg",
    color: "#F2B41C",
  },
  {
    title: "Accent",
    subTitle: "Highlight color.",
    token: "lg",
    color: "#A67C14",
  },
];

const baseClasses = {
  div: `
    flex flex-col
    w-full
    gap-7
    `,
};

function ChartsSection() {
  return (
    <div className={baseClasses.div}>
      <ChartsPreview />
      <KpiColorInputs contents={chartsPreviewContents} />
    </div>
  );
}

export default ChartsSection;
