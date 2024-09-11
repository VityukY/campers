import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload); // Update state.items with the filtered array
    },
  },
});

export const { addFavorites, removeFavorites } = contactSlice.actions;
export const favoritesReducer = contactSlice.reducer;
