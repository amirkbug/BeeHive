import ColorInput from "../../../ui/organs/ColorInput";

import { setFeedbackColor } from "../settingsSlice";
import { useDispatch, useSelector } from "react-redux";

const baseClasses = {
  div: `
    flex flex-row
    items-start justify-start
    w-full
    gap-4
  `,
};

const tempContents = [
  {
    title: "Success",
    subTitle: "Color for success.",
    token: "lg",
    feedBackField: "successColor",
  },
  {
    title: "Warning",
    subTitle: "Color for warnings.",
    token: "lg",
    feedBackField: "warningColor",
  },
  {
    title: "Destructive",
    subTitle: "Color for errors.",
    token: "lg",
    feedBackField: "destructiveColor",
  },
];

function KpiColorInputs({ contents = tempContents }) {
  const { feedbackColors } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  function handleSelectedColor(colorName, color) {
    dispatch(
      setFeedbackColor({
        colorName,
        color,
      }),
    );
  }

  return (
    <div className={baseClasses.div}>
      {contents.map((content) => (
        <ColorInput
          key={content.title}
          title={content.title}
          subTitle={content.subTitle}
          token={content.token}
          selectedColor={feedbackColors[content.feedBackField]}
          onColorChange={(color) =>
            handleSelectedColor(content.feedBackField, color)
          }
        />
      ))}
    </div>
  );
}

export default KpiColorInputs;
