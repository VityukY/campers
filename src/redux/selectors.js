import { createSelector } from "@reduxjs/toolkit";

export const selectedCampers = (state) => state.campers.items;
export const selectNameFilter = (state) => state.filters.filters;
export const selectedIsLoading = (state) => state.campers.isLoading;
export const selectedError = (state) => state.campers.error;

export const selectFilteredCampers = createSelector(
  [selectedCampers, selectNameFilter],
  (campers, filters) => {
    // Перевірка, чи campers є масивом
    if (!Array.isArray(campers.items)) {
      console.error(
        "Expected campers to be an array but received:",
        campers.items
      );
      return []; // Повертає пустий масив, якщо campers не є масивом
    }

    // Перевірка, чи filters є масивом
    if (!Array.isArray(filters)) {
      console.error("Expected filters to be an array but received:", filters);
      return campers.items; // Повертає всі campers, якщо filters не є масивом
    }

    // Якщо фільтри пусті, повертаємо всі кемпери
    if (filters.length === 0) {
      return campers.items;
    }

    // Фільтрація кемперів за наявними фільтрами
    return campers.items.filter((camper) => {
      return filters.every((filter) => {
        const [key, value] = Object.entries(filter)[0];
        return camper[key] === value;
      });
    });
  }
);
