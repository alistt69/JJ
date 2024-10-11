import classes from "./classes.module.scss"
import {NavLink} from "react-router-dom";
import {paths} from "@/routes/routes.ts";
import {useFunctions} from "@/context/context.tsx";

const MyPosts = () => {

    const {isJobSeeker, setIsJobSeeker } = useFunctions()

    return (
        <>
            <div className={classes.postsNav_container}>
                <div onClick={() => setIsJobSeeker(!isJobSeeker)} className={classes.posts_switcher}>
                    My
                    <NavLink to={!isJobSeeker ? paths.CVS : paths.APPLICATIONS}>{!isJobSeeker ? 'applications' : 'cvs'}</NavLink>
                </div>
                <NavLink to={paths.UPLOAD}><img className={classes.image} src="/src/images/createnew/createnew.png" alt={''}/></NavLink>
            </div>
        </>
    )
}

export default MyPosts;