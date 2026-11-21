import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userBackgroundColor: "#fff",

  feedbackColors: {
    successColor: "#55C271",
    warningColor: "#F8C53A",
    destructiveColor: "#E75F5F",
  },

  chartColors: {
    primary: "#F8F8F4",
    secondary: "#F2B41C",
    accent: "#A67C14",
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
      const { colorName, color } = action.payload;

      state.feedbackColors[colorName] = color;
    },
  },
});

export default settingsSlice.reducer;

export const { setUserBackgroundColor, setFeedbackColor } =
  settingsSlice.actions;
