import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

export const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
