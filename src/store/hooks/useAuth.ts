import { useDispatch, useSelector } from 'react-redux';
import {clearUsername, setUsername, setPassword} from "@/store/reducers/auth/authSlice.ts";

export const useAuth = () => {
    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.auth.username);

    const login = (username: string, password: string) => {
        dispatch(setUsername(username));
        dispatch(setPassword(password))
    };

    const logout = () => {
        dispatch(clearUsername());
    };

    return {
        username,
        login,
        logout,
    };
};