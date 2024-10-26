import {useSelector} from "react-redux";
import {RootState} from "@/store";


export const useUserInit = () => {

    const user = useSelector((state: RootState) => state.auth.user);

    return user || {id: '', username: '', password: '', applications: [], cvs: []};
}
