/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (location) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const locationUrl = 'https://geocode.maps.co/search?q=';
    const geoRes = await axios.get(`${locationUrl}${location}`);
    const [{ lat, lon }] = await geoRes.json();
    const weatherRes = await axios.get(
      `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`,
    );
    const results = await weatherRes.json();
    return results;
  },
);

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    value: 'Stockton, CA',
    newValue: '',
    weather: {},
    coords: [],
    loading: true,
    error: false,
  },
  reducers: {
    changeLocation(state, { payload }) {
      // submit handler
      state.value = payload;
    },
    changeNewLocation(state, { payload }) {
      // onchange handler
      state.newValue = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
        state.value = {};
        state.coords = [];
      })
      .addCase(
        getWeather.fulfilled,
        (state, { payload: { lat, lon, weather } }) => {
          state.loading = false;
          state.error = false;
          state.coords = [lat, lon];
          state.weather = weather;
        },
      )
      .addCase(getWeather.rejected, (state) => {
        (state.loading = false), (state.error = true);
      });
  },
});

export const { changeLocation, changeNewLocation } =
  locationSlice.actions;

export default locationSlice.reducer;
