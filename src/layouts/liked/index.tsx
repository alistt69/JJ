import {Outlet} from "react-router-dom";
import Liked from "@/pages/main/liked";

const LikedLayout = () => {

    return(
        <>
            <Liked />
            <Outlet />
        </>
    )
}

export default LikedLayout;
