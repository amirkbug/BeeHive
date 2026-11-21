import { useSelector } from "react-redux";

function useCustomColor(type = "warning") {
  const { successColor, warningColor, destructiveColor } = useSelector(
    (state) => state.settings.feedbackColors,
  );

  const customColor =
    type === "destructive"
      ? destructiveColor
      : type === "success"
        ? successColor
        : warningColor;

  return customColor;
}

export default useCustomColor;
