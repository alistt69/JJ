import Jobs from "@/pages/main/jobs";
import { Outlet } from "react-router-dom";
import JobsContainer from "@/components/containers/jobs";
import CardsContainer from "@/components/containers/cards";

const JobsLayout = () => {

    return(
        <>
            <JobsContainer>
                <Jobs />
                <CardsContainer>
                    <Outlet />
                </CardsContainer>
            </JobsContainer>
        </>
    )
}

export default JobsLayout;