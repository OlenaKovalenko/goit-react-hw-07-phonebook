import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        .addCase()
    }
});

export const contactsReducer = contactsSlice.reducer;

