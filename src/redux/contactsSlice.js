import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { deleteContact, addContact } = contactSlice.actions;
export const selectContacts = (state) => state.contacts.items;

export default contactSlice.reducer;
