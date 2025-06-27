import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  sub: 0,
};
const subsSlice = createSlice({
  name: 'subtraction',
  initialState,
  reducers: {
    subtraction: (state, action) => {
      console.log(action);
      state.sub = Number(action.payload.value1) - Number(action.payload.value2);
    },
    clearSubs: (state) => {
      state.sub = 0;
    },
  },
});

export const { subtraction,clearSubs } = subsSlice.actions;

export default subsSlice.reducer;
