import ColorInput from "../../../ui/organs/ColorInput";

import { setUserBackgroundColor } from "../settingsSlice";
import { useDispatch, useSelector } from "react-redux";

function EditBackgroundColor() {
  const { userBackgroundColor } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  function handleSelectedColor(color) {
    dispatch(setUserBackgroundColor(color));
  }

  return (
    <ColorInput
      selectedColor={userBackgroundColor}
      onColorChange={handleSelectedColor}
      title="Background color"
      subTitle="Profile background color."
      token="lg"
    />
  );
}

export default EditBackgroundColor;
