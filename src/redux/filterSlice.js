import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  filters: [],
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.filters = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { setStatusFilter, setLocation } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
