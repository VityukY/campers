import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
import { favoritesReducer } from "./favoritesSlice";
import { filtersReducer } from "./filterSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    campers: campersReducer,
    filters: filtersReducer,
  },
});
