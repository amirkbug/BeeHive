import DropDown from "../../../ui/molecules/DropDown";
import AnimatedIcon from "../../../ui/atoms/AnimatedIcon";
import Button from "../../../ui/molecules/Button";

import { useThemeContext } from "../../../contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { setPresetColor } from "../settingsSlice";

const baseClasses = {
  dropDownButton: `
    disabled:ring-1 disabled:ring-accent-100
  `,
};

function EditPreferences() {
  const { type, selectedTypeInverse } = useThemeContext();
  const dispatch = useDispatch();

  const presetValue = useSelector((state) => state.settings.selectedPreset);

  function handleChangePreset(value) {
    dispatch(setPresetColor(value));
  }

  return (
    <>
      <DropDown
        setOptionValue={handleChangePreset}
        defaultValue="default"
        optionValue={presetValue}
        type={type}
      >
        <DropDown.DropDownButton opens="customization_preset">
          <Button
            className={baseClasses.dropDownButton}
            type={selectedTypeInverse}
          >
            Customization Preset
            <AnimatedIcon position="right" type={type} token="md" />
          </Button>
        </DropDown.DropDownButton>

        <DropDown.DropDownUl name="customization_preset">
          <DropDown.DropDownLi value="default">🟡 Default</DropDown.DropDownLi>
          <DropDown.DropDownLi value="ocean">🌊 Ocean</DropDown.DropDownLi>
          <DropDown.DropDownLi value="forest">🌲 Forest</DropDown.DropDownLi>
          <DropDown.DropDownLi value="sunset">☀️ Sunset</DropDown.DropDownLi>
        </DropDown.DropDownUl>
      </DropDown>
      <DropDown defaultValue="every_hour" type={type}>
        <DropDown.DropDownButton opens="sync_frequency">
          <Button
            className={baseClasses.dropDownButton}
            type={selectedTypeInverse}
          >
            Sync Frequency
            <AnimatedIcon position="right" type={type} token="md" />
          </Button>
        </DropDown.DropDownButton>
        <DropDown.DropDownUl name="sync_frequency">
          <DropDown.DropDownLi value="every_15_minutes">
            ⏱️ Every 15 Minutes
          </DropDown.DropDownLi>
          <DropDown.DropDownLi value="every_hour">
            🕐 Every Hour
          </DropDown.DropDownLi>
          <DropDown.DropDownLi value="every_6_hours">
            🕕 Every 6 Hours
          </DropDown.DropDownLi>
          <DropDown.DropDownLi value="every_day">
            📅 Every Day
          </DropDown.DropDownLi>
        </DropDown.DropDownUl>
      </DropDown>
      <DropDown defaultValue="english" type={type}>
        <DropDown.DropDownButton opens="language">
          <Button
            className={baseClasses.dropDownButton}
            type={selectedTypeInverse}
          >
            Language
            <AnimatedIcon position="right" type={type} token="md" />
          </Button>
        </DropDown.DropDownButton>

        <DropDown.DropDownUl name="language">
          <DropDown.DropDownLi value="english">🇬🇧 English</DropDown.DropDownLi>
          <DropDown.DropDownLi value="french">🇫🇷 French</DropDown.DropDownLi>
          <DropDown.DropDownLi value="spanish">🇪🇸 Spanish</DropDown.DropDownLi>
        </DropDown.DropDownUl>
      </DropDown>
    </>
  );
}

export default EditPreferences;
