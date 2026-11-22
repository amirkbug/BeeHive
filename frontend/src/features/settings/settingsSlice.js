import colorPresets from "../../utils/colorPresets";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPreset: "default",
  userBackgroundColor: "rgba(222, 206, 174, 1)",

  statusColors: {
    successColor: "rgba(47, 158, 68, 1)",
    successColorSecondary: "rgba(199, 235, 207, 1)",
    warningColor: "rgba(242, 180, 28, 1)",
    warningColorSecondary: "rgba(255, 231, 170, 1)",
    destructiveColor: "rgba(214, 69, 69, 1)",
    destructiveColorSecondary: "rgba(247, 199, 199, 1)",
  },

  chartColors: {
    primary: "rgba(242, 180, 28, 1)",
    secondary: "rgba(242, 180, 28, 0.6)",
    accent: "rgba(242, 180, 28, 0.8)",
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {
    setUserBackgroundColor(state, action) {
      state.userBackgroundColor = action.payload;
    },

    setFeedbackColor(state, action) {
      const { colorState, color } = action.payload;

      state.statusColors[colorState] = color;
    },

    setChartColor(state, action) {
      const { colorState, color } = action.payload;
      state.chartColors[colorState] = color;
    },

    setPresetColor(state, action) {
      const value = action.payload;
      const preset = colorPresets(value);

      state.selectedPreset = value;
      state.statusColors = preset.statusColors;
      state.chartColors = preset.chartColors;
    },
  },
});

export default settingsSlice.reducer;

export const {
  setUserBackgroundColor,
  setPresetColor,
  setFeedbackColor,
  setChartColor,
} = settingsSlice.actions;
