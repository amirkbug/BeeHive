import Logo from "../../../ui/atoms/Logo";

import { useThemeContext } from "../../../contexts/ThemeContext";

function BeeHiveLogoButton({ onOpen }) {
  const { selectedTypeInverse } = useThemeContext();

  return (
    <button onClick={onOpen}>
      <Logo type={selectedTypeInverse} logoType="primary" token="xll" />
    </button>
  );
}

export default BeeHiveLogoButton;
