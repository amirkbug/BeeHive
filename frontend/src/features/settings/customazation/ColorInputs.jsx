import ColorInput from "../../../ui/organs/ColorInput";

import { useDispatch } from "react-redux";

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
    colorState: "successColor",
  },
  {
    title: "Warning",
    subTitle: "Color for warnings.",
    token: "lg",
    colorState: "warningColor",
  },
  {
    title: "Destructive",
    subTitle: "Color for errors.",
    token: "lg",
    colorState: "destructiveColor",
  },
];

function ColorInputs({ contents = tempContents, colorStateObj, action }) {
  const dispatch = useDispatch();

  function handleSelectedColor(colorState, color) {
    dispatch(
      action({
        colorState,
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
          selectedColor={colorStateObj[content.colorState]}
          onColorChange={(color) =>
            handleSelectedColor(content.colorState, color)
          }
        />
      ))}
    </div>
  );
}

export default ColorInputs;
