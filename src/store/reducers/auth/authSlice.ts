import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User} from "@/models/user";

interface AuthState {
    username: string | null;
    user: User | null,
}

const initialState: AuthState = {
    username: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        resetUsername: (state) => {
            state.username = null;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        }
    },
});

export const { setUsername, resetUsername, setUser } = authSlice.actions;
export default authSlice.reducer;