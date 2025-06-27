import { configureStore } from '@reduxjs/toolkit';
import reducerCounter from './counter/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: reducerCounter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
