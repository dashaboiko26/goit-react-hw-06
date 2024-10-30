import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, actions) => {
      state.name = actions.payload;
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export const selectedNameFilter = (state) => state.filters.name;

export default filtersSlice.reducer;
