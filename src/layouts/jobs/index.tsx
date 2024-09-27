import JobsWrap from "@/components/jobs-wrap";
import Jobs from "@/pages/main/jobs";
import {Outlet} from "react-router-dom";

const JobsLayout = () => {

    return(
        <>
            <JobsWrap>
                <Jobs />
                <Outlet />
            </JobsWrap>
        </>
    )
}

export default JobsLayout;