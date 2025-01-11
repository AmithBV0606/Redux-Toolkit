import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "./habit-slice";

const store = configureStore({
  reducer: {
    habits: habitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export default store;