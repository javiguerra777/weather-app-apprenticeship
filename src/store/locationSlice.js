/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const location = 'Stockton, CA';
const newLocation = '';
export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    value: location,
    newValue: newLocation,
  },
  reducers: {
    changeLocation(state, { payload }) {
      state.value = payload;
    },
    changeNewLocation(state, { payload }) {
      state.newValue = payload;
    },
  },
});

export const { changeLocation, changeNewLocation } =
  locationSlice.actions;

export default locationSlice.reducer;
