import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userBackgroundColor: "#DEC9AE",
  feedBackColors: {
    successColor: "#55C271",
    warningColor: "#7D5E0F",
    destructiveColor: "#E75F5F",
  },
  chartColors: {
    primary: "#F8F8F4",
    secondary: "#F2B41C",
    accent: "#A67C14",
  },
};
const settingsSlice = createSlice({
  name: "componentsColor",
  initialState,
  reducers: {
    backgroundChange(state, action) {
      state.userBackgroundColor = action.payload;
    },
  },
});

export default settingsSlice.reducer;
export const { backgroundChange } = settingsSlice.actions;
