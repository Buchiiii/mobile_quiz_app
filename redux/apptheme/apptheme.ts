import { createSlice } from "@reduxjs/toolkit";

interface AppTheme {
  isDark: boolean;
}

const initialState: AppTheme = {
  isDark: false,
};

const appThemeSlice = createSlice({
  name: "apptheme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { changeTheme } = appThemeSlice.actions;
export default appThemeSlice.reducer;
