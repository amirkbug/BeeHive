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

  kpiContents: [
    {
      id: 1,
      icon: "wallet-money",
      title: "Total Revenue",
      numberFormat: "currency",
      dataSource: "orders",
      trendDirection: "higher_is_better",
      kpiCaption: "Revenue generated this month",
      targets: {
        daily: 2000,
        weekly: 14000,
        monthly: 60000,
        yearly: 720000,
      },
    },
    {
      id: 2,
      icon: "cart-large",
      title: "Total Orders",
      numberFormat: "number",
      dataSource: "revenue",
      trendDirection: "higher_is_better",
      kpiCaption: "Orders received this month",
      targets: {
        daily: 2000,
        weekly: 700,
        monthly: 3000,
        yearly: 36000,
      },
    },
    {
      id: 3,
      icon: "wallet-money",
      title: "Total Expenses",
      numberFormat: "currency",
      dataSource: "expenses",
      trendDirection: "lower_is_better",
      kpiCaption: "Total expenses this month",
      targets: {
        daily: 150,
        weekly: 3000,
        monthly: 4500,
        yearly: 54000,
      },
    },
  ],
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

    setKpiContents(state, action) {
      const { id, data } = action.payload;

      const index = state.kpiContents.findIndex((kpi) => kpi.id === id);

      if (index !== -1) {
        state.kpiContents[index] = {
          ...state.kpiContents[index],
          ...data,
        };
      }
    },
  },
});

export default settingsSlice.reducer;

export const {
  setUserBackgroundColor,
  setPresetColor,
  setFeedbackColor,
  setChartColor,
  setKpiContents,
} = settingsSlice.actions;
