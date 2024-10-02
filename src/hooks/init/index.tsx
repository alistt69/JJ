import {useGetUserByUsernameQuery} from "@/api/auth";
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import {useEffect} from "react";


export const useUserInit = () => {

    const username = useSelector((state: RootState) => state.auth.username) || '';
    const { data: user, refetch } = useGetUserByUsernameQuery(username, {
        skip: username.length === 0,
    });

    useEffect(() => {
        if (username) {
            refetch();
        }
    }, [username, refetch]);

    return user;
}
