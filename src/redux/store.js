// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoritesReducer } from "./favoritesSlice";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filterSlice";
import persistConfig from "./persistConfig";

// Застосування persistReducer
const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

export const store = configureStore({
  reducer: {
    favorites: persistedFavoritesReducer,
    campers: campersReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
