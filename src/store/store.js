
import { configureStore } from '@reduxjs/toolkit';
import { storeSlice } from './fakeStore';

export const store = configureStore({
  reducer: {
    fakeStore: storeSlice.reducer,
  },
});