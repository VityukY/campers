import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./campersSlice";
//import { filtersReducer } from "./filtersSlice";
import { favoritesReducer } from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    campers: campersReducer,
    //filters: filtersReducer,
  },
});
