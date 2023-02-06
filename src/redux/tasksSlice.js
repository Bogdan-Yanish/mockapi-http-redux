import { createSlice } from "@reduxjs/toolkit";

const taskInitialState = {
    items: [],
    isLoading: false,
    error: null,
};

const tasksSlice = createSlice({
    name:"tasks",
    initialState: taskInitialState,
    reducers: {
        fetchingInProgress(state){
            state.isLoading = true;
        },

        fetchingSuccess(state, action){
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },

        fetchingError(state, action){
            state.isLoading = false;
            state.error = action.payload;
        },
    },
})

export const {fetchingError, fetchingInProgress, fetchingSuccess} = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;