import settingsReducer from "./features/settings/settingsSlice";
import dataReducer from "./features/data/dataSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    data: dataReducer,
  },
});

export default store;
