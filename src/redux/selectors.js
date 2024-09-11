import { createSelector } from "@reduxjs/toolkit";

export const selectedCampers = (state) => state.campers.items;
//export const selectNameFilter = (state) => state.filter.filters.name;
export const selectedIsLoading = (state) => state.campers.isLoading;
export const selectedError = (state) => state.campers.error;
/*
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(nameFilter)
    )
);
*/
