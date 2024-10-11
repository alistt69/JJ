import MyPosts from "@/pages/main/posts";
import {Outlet} from "react-router-dom";
import CardsContainer from "@/components/cards/container";

const PostsLayout = () => {

    return(
        <>
            <CardsContainer>
                <MyPosts />
                <Outlet />
            </CardsContainer>
        </>
    )
}

export default PostsLayout;
