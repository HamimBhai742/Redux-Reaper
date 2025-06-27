import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  sum: 0,
};
const sumSlice = createSlice({
  name: 'sum',
  initialState,
  reducers: {
    addTowNumber:(state,action)=>{
      // console.log(state,action)
      state.sum= Number(action.payload.value1)+Number(action.payload.value2)
    },
    clearSum:(state)=>{
      state.sum=0
     
    }
    // sub:(state,action)=>{

    // }
  },
});

export const { addTowNumber ,clearSum} = sumSlice.actions;

export default sumSlice.reducer;
