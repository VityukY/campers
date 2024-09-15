import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorites: (state, { payload }) => {
      state.items.push(payload);
    },
    removeFavorites: (state, { payload }) => {
      state.items = state.items.filter((item) => item !== payload);
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
