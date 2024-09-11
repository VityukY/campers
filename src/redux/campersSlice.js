import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, getCampersDetails } from "./campersOps";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(getCampersDetails.pending, handlePending)
      .addCase(getCampersDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getCampersDetails.rejected, handleRejected);
  },
});

export const campersReducer = campersSlice.reducer;
