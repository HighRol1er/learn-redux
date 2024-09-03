/* 
  this file contain everything that we need anything that 
  is related to our counter slice our actions, our reducers, 
  our state they're all going to go in this file
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name : "counter",
  initialState,
  reducers : {
    increment: (state /*actcion : option */) => {
      state.value += 1;
    },
    decrement : (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; 

export default counterSlice.reducer;