import { useSelector } from "react-redux";
import ColorInput from "../../../ui/organs/ColorInput";

function EditBackgroundColor() {
  const { userBackgroundColor } = useSelector((state) => state.settings);

  return (
    <ColorInput
      color={userBackgroundColor}
      title="Background color"
      subTitle="Profile background color."
      token="lg"
    />
  );
}

export default EditBackgroundColor;
