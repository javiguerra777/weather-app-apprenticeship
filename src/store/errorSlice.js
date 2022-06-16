/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const error = false;
export const errorSlice = createSlice({
  name: 'error',
  initialState: {
    value: error,
  },
  reducers: {
    // eslint-disable-next-line no-unused-vars
    toggleError(state, action) {
      if (!state.value) {
        state.value = true;
      } else if (state.value) {
        state.value = false;
      }
    },
  },
});

export const { toggleError } = errorSlice.actions;
export default errorSlice.reducer;
