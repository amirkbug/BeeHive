import settingsReducer from "./features/settings/settingsSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

export default store;
