import { configureStore } from '@reduxjs/toolkit';
import reduceSum from './sum/SumSlice';

export const store = configureStore({
  reducer: {
    sum: reduceSum,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
