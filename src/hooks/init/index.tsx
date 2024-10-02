import {useGetUserByUsernameQuery} from "@/api/auth";
import {useSelector} from "react-redux";
import {RootState} from "@/store";


export const useUserInit = () => {

    const username = useSelector((state: RootState) => state.auth.username) || '';
    const { data: user } = useGetUserByUsernameQuery(username, {
        skip: username.length === 0,
    });

    return user;

}