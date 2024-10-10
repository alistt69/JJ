import {useState} from "react";
import Applications from "@/pages/main/posts/components/applications";
import Cvs from "@/pages/main/posts/components/cvs";
import CardsContainer from "@/components/cards/container";
import classes from "./classes.module.scss"

const MyPosts = () => {

    const [cvsPage, setCvsPage] = useState(true);

    return (
        <>
            <CardsContainer>
                <div className={classes.postsNav_container}>
                    <div onClick={() => setCvsPage(prevState => !prevState)} className={classes.posts_switcher}>
                        My
                        <p>{cvsPage ? 'cvs' : 'applications'}</p>
                    </div>
                    <img className={classes.image} src="/src/images/createnew/createnew.png" alt={''}/>
                </div>
                {cvsPage ? <Cvs/> : <Applications/>}
            </CardsContainer>
        </>
    )
}

export default MyPosts;