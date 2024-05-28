import { createSlice } from "@reduxjs/toolkit";

const baseSlice = createSlice({
    name: 'base',
    initialState: {
        loading: false
    },
    reducers: {
        setLoading: (state, action) => state.loading = action.payload
    }
});

export const { setLoading } = baseSlice.actions;

export default baseSlice.reducer;