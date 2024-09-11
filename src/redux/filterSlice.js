import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  equipment: {
    ac: false,
    automatic: false,
    kitchen: false,
    tv: false,
    bathroon: false,
  },
  vehicle: {
    van: false,
    integration: false,
    aicove: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
