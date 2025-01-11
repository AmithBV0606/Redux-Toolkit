import { configureStore } from "@reduxjs/toolkit";
import habbitReducer from "./habbit-slice";

const store = configureStore({
  reducer: {
    habbits: habbitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export default store;