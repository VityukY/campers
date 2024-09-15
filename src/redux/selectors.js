import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items.items;
export const selectFilter = (state) => state.filters.filters;
export const selectLocation = (state) => state.filters.location;
export const selectIsLoading = (state) => state.campers.isLoading;
export const selectedIsLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectedFavorites = (state) => state.favorites.items;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilter, selectLocation],
  (campers, filters, location) => {
    if (!Array.isArray(campers)) return [];
    if (!Array.isArray(filters)) return campers;

    const normalizedLocation = location?.toLowerCase() || "";

    const locationFilteredCampers = normalizedLocation
      ? campers.filter(({ location: camperLocation }) =>
          camperLocation.toLowerCase().includes(normalizedLocation)
        )
      : campers;

    return locationFilteredCampers.filter((camper) =>
      filters.every((filter) =>
        Object.entries(filter).every(([key, value]) => camper[key] === value)
      )
    );
  }
);
