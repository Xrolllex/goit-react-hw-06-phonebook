import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, updateFilter } from './actions';

const initialState = {
  contacts: [],
  filter: ''
};


const contactsReducer = createReducer(initialState.contacts, builder => {
  builder
    .addCase(addContact, (state, action) => {
      
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      
      return state.filter(contact => contact.id !== action.payload);
    });
});

const filterReducer = createReducer(initialState.filter, builder => {
  builder.addCase(updateFilter, (state, action) => {
        return action.payload;
  });
});

export { contactsReducer, filterReducer };