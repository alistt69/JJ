import { Outlet } from "react-router-dom";
import MainContainer from "@/components/containers/main";

const MainLayout = () => {

    return(
        <>
            <MainContainer>
                <Outlet />
            </MainContainer>
        </>
    )
}

export default MainLayout;