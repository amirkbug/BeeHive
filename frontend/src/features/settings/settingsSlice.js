import colorPresets from "../../utils/colorPresets";

import {
  UsersGroupRoundedIcon,
  WalletMoneyIcon,
} from "@solar-icons/react/linear";
import { createSlice } from "@reduxjs/toolkit";
import { TbShoppingCartDiscount } from "react-icons/tb";

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
      icon: WalletMoneyIcon,
      title: "Total Revenue",
      numberFormat: "currency",
      number: 48250,
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
      icon: TbShoppingCartDiscount,
      title: "Total Orders",
      numberFormat: "number",
      number: 1284,
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
      icon: UsersGroupRoundedIcon,
      title: "Total Customers",
      numberFormat: "compact",
      number: 3642,
      kpiCaption: "Customers acquired this month",
      targets: {
        daily: 150,
        weekly: 4000,
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
  },
});

export default settingsSlice.reducer;

export const {
  setUserBackgroundColor,
  setPresetColor,
  setFeedbackColor,
  setChartColor,
} = settingsSlice.actions;
