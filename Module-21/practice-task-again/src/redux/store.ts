import { configureStore } from '@reduxjs/toolkit';
import subsReducer from './substraction/subsSlice';
export const store = configureStore({
  reducer: {
    sub: subsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
