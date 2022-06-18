import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './errorSlice';
import locationReducer from './locationSlice';

export default configureStore({
  reducer: {
    error: errorReducer,
    location: locationReducer,
  },
});
