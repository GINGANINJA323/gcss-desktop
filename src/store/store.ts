import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import baseSlice from "./baseSlice";

export const store = configureStore({
    reducer: {
        base: baseSlice,
        user: userSlice
    }
});
