/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const error = false;
export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    value: error,
    count: 0,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    toggleError(state) {
      state.value = !state.value;
    },
    increment(state) {
      state.count += 1;
    },
  },
});

export const { toggleError, increment } = errorSlice.actions;
export default errorSlice.reducer;
