import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";

import pageReducer from "../pageSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  page: pageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const REDUX_STORE = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(REDUX_STORE);

export type RootState = ReturnType<typeof REDUX_STORE.getState>;
export type AppDispatch = typeof REDUX_STORE.dispatch;
