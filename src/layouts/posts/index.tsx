import MyPosts from "@/pages/main/posts";
import { Outlet } from "react-router-dom";
import CardsContainer from "@/components/containers/cards";

const PostsLayout = () => {

    return(
        <>
            <MyPosts/>
            <CardsContainer>
                <Outlet/>
            </CardsContainer>
        </>
    )
}

export default PostsLayout;
