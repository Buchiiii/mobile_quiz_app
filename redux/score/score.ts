import { createSlice } from "@reduxjs/toolkit";

interface IScore {
  value: number;
}

const initialState: IScore = {
  value: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.value = state.value + 1;
    },
    resetScore: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementScore, resetScore} = scoreSlice.actions;

export default scoreSlice.reducer;
