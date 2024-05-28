import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SettingsType } from "../types";
import { setLoading } from "./baseSlice";

export const getSettingsFromFile = createAsyncThunk('user/getSettings', async () => {
    // @ts-ignore - window.host is a custom property from Electron
    return window.host.readSettings();
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        user_pat: '',
        user_repo_name: '',
        firstStartup: true
    },
    reducers: {
        setUserSettings: (state, action) => {
            state = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSettingsFromFile.pending, (state, action) => {
            console.log('fetching settings file contents');
            setLoading(true);
        }),
        builder.addCase(getSettingsFromFile.fulfilled, (state, action) => {
            const settings: SettingsType = JSON.parse(action.payload);
            state = { ...state, ...settings, firstStartup: false };
            setLoading(false);
        }),
        builder.addCase(getSettingsFromFile.rejected, (state, action) => {
            console.log('Failed to get settings');
            // TODO: Launch first time startup from here
            state.firstStartup = true;
            setLoading(false);
        })
    }
});

export const { setUserSettings } = userSlice.actions;

export default userSlice.reducer;