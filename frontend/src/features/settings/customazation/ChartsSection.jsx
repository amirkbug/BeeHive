import ChartsPreview from "./ChartsPreview";
import ColorInputs from "./ColorInputs";
import Explanations from "./Explanations";

import { setChartColor } from "../settingsSlice";
import { useSelector } from "react-redux";

const firstChartTypes = ["bar", "pie", "area"];
const secondChartTypes = ["scatter", "dougnut", "line"];

const chartInputContents = [
  {
    title: "Primary",
    subTitle: "Main charts color.",
    token: "lg",
    colorState: "primary",
  },
  {
    title: "Secondary",
    subTitle: "Secondary charts color.",
    token: "lg",
    colorState: "secondary",
  },
  {
    title: "Accent",
    subTitle: "Highlight color.",
    token: "lg",
    colorState: "accent",
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
  const { chartColors } = useSelector((state) => state.settings);
  return (
    <div className={baseClasses.div}>
      <Explanations title="Customize Chart Colors">
        <p>
          Adjust the visual appearance of your charts by customizing three color
          roles. Primary defines the main data series, secondary represents
          additional data series, and accent is used for supporting elements
          such as labels, text, and backgrounds.
        </p>
      </Explanations>
      <ChartsPreview types={firstChartTypes} />
      <ChartsPreview types={secondChartTypes} />
      <ColorInputs
        action={setChartColor}
        colorStateObj={chartColors}
        contents={chartInputContents}
      />
    </div>
  );
}

export default ChartsSection;
