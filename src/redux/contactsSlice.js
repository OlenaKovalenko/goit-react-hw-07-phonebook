import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: {
            prepare( {name, number} ) {
                return {
                    payload: {
                    name,
                    number,
                    id: nanoid(),
                    } 
                }
            },
            reducer(state, action) {
                return state = [...state, action.payload];
                },
        },

        deleteContact(state, action) {
                return state = state.filter(contact => contact.id !== action.payload);
            }
        }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

