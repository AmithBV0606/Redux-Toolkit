import { createSlice } from "@reduxjs/toolkit";

export interface Habbit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

// Types for initial state
export interface HabbitState {
  habbits: Habbit[];
}

const initialState: HabbitState = {
  habbits: [],
};

const habbitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabbit: () => {},
  },
});

export const { addHabbit } = habbitSlice.actions;

export default habbitSlice.reducer;