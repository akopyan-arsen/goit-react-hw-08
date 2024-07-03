import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
    number: "",
  },
  reducers: {
    filterContact: (state, action) => {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
