import { createSlice, isAnyOf} from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const STATUS = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
};

const arrThunks = [fetchContacts, addContact, deleteContact];

const fn = type => arrThunks.map(el => el[type]);

const handlePending = state => {
    state.isLoading = true;
};

const handleFulfilled = (state,{payload}) => {
    state.isLoading = false;
    state.error = null;
};

const handleRejected = (state,{payload}) => {
    state.isLoading = false;
    state.error = payload;
};

const handleFulfilledGet = (state, { payload }) => {
    state.items = payload;
};

const handleFulfilledAdd = (state, { payload }) => {
    state.items.push(payload);
};

const handleFulfilledDel = (state, { payload }) => {
    state.items = state.items.filter(item => item.id !== payload.id);
    
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: builder => {
        const { PENDING, FULFILLED, REJECTED } = STATUS;

        builder
            .addCase(fetchContacts.fulfilled, handleFulfilledGet)
            .addCase(addContact.fulfilled, handleFulfilledAdd)
            .addCase(deleteContact.fulfilled, handleFulfilledDel)
            .addMatcher(isAnyOf(...fn(PENDING)), handlePending)
            .addMatcher(isAnyOf(...fn(FULFILLED)), handleFulfilled)
            .addMatcher(isAnyOf(...fn(REJECTED)), handleRejected)
    }
});

export const contactsReducer = contactsSlice.reducer;

