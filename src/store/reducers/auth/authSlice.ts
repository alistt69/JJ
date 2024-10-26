import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItemApp, ItemCvs, User } from "@/models/user";

interface AuthState {
    username: string;
    user: User,
}

const initialState: AuthState = {
    username: "mockup username",
    user: {id: '', username: '', password: '', applications: [], cvs: []},
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        resetUsername: (state) => {
            state.user = initialState.user;
        },
        updateApplications: (state, action: PayloadAction<ItemApp[]>) => {
            state.user.applications = action.payload;
        },
        updateCvs: (state, action: PayloadAction<ItemCvs[]>) => {
            state.user.cvs = action.payload;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    },
});

export const { setUsername, resetUsername, setUser, updateApplications, updateCvs } = authSlice.actions;
export default authSlice.reducer;