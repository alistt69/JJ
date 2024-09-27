import Sidebar from "@/components/sidebar";
import Wrap from "@/components/wrap";
import {Outlet} from "react-router-dom";

const MainLayout = () => {

    return(
        <>
            <Sidebar />
            <Wrap>
                <Outlet />
            </Wrap>
        </>
    )
}

export default MainLayout;