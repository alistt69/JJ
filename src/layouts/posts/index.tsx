import MyPosts from "@/pages/main/posts";
import {Outlet} from "react-router-dom";
import JobsContainer from "@/components/containers/jobs";
import CardsContainer from "@/components/containers/cards";

const PostsLayout = () => {

    return(
        <>
            <JobsContainer>
                <MyPosts/>
                <CardsContainer>
                    <Outlet/>
                </CardsContainer>
            </JobsContainer>
        </>
    )
}

export default PostsLayout;
