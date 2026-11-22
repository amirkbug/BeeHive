import { useSelector } from "react-redux";

function useCustomColor(type = "warning") {
  const {
    successColor,
    warningColor,
    destructiveColor,
    destructiveColorSecondary,
    warningColorSecondary,
    successColorSecondary,
  } = useSelector((state) => state.settings.statusColors);

  const primaryCustomColor =
    type === "destructive"
      ? destructiveColor
      : type === "success"
        ? successColor
        : warningColor;

  const secondaryCustomColor =
    type === "destructive"
      ? destructiveColorSecondary
      : type === "success"
        ? successColorSecondary
        : warningColorSecondary;

  return { primaryCustomColor, secondaryCustomColor };
}

export default useCustomColor;
