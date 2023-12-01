import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "../pageSlice";

export const REDUX_STORE = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof REDUX_STORE.getState>;
export type AppDispatch = typeof REDUX_STORE.dispatch;
