import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { favoritesReducer } from "./favoritesSlice";
import { campersReducer } from "./campersSlice";
import { filtersReducer } from "./filterSlice";
import persistConfig from "./persistConfig";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
