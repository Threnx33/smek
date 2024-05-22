import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import designerReducer from "./reducers/designer";
import historyReducer from "./reducers/history";
import pageReducer from "./reducers/page";
import richTextReducer from "./reducers/richText";

const rootReducer = combineReducers({
  page: pageReducer,
  richText: richTextReducer,
  history: historyReducer,
  designer: designerReducer,
});

export const REDUX_STORE = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
});

export type RootState = ReturnType<typeof REDUX_STORE.getState>;
export type AppDispatch = typeof REDUX_STORE.dispatch;
