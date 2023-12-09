import { createSlice, nanoid } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleFulfilled = (state,{payload}) => {
    state.isLoading = false;
    state.items = payload;
    state.error = null;
};

const handleRejected = (state,{payload}) => {
    state.isLoading = false;
    state.error = payload;
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, handleFulfilled)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.push(payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                
                const index = state.items.findIndex(item => item.id === payload.id);
                state.items.splice(index, 1, payload);
            })
            .addCase(deleteContact.rejected, handleRejected)
    }
});

export const contactsReducer = contactsSlice.reducer;

