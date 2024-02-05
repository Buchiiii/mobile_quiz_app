import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./score/score";
import themeReducer from "./apptheme/apptheme";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
