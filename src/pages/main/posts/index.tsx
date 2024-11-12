import { useFunctions } from "@/context/context.tsx";
import { NavLink } from "react-router-dom";
import { paths } from "@/routes/routes.ts";

import classes from "./classes.module.scss"


const MyPosts = () => {

    const { setIsJobSeeker, setIsUploading } = useFunctions()

    return (
        <>
            {/*<div className={classes.postsNav_container}>
                <div className={classes.posts_switcher}>
                    My
                    <NavLink onClick={() => setIsJobSeeker(!isJobSeeker)} to={!isJobSeeker ? paths.CVS : paths.APPLICATIONS}>{!isJobSeeker ? 'applications' : 'cvs'}</NavLink>
                </div>
            </div>*/}

            <p className={classes.name}>My posts</p>
            <nav className={classes.navigation}>
                <NavLink onClick={() => {
                    setIsJobSeeker(true)
                    setIsUploading(false)
                }} className={({isActive}) => (isActive ? `${classes.active} ${classes.cvs}` : undefined)} to={paths.CVS}>cvs</NavLink>
                {" "}
                <NavLink onClick={() => {
                    setIsJobSeeker(false)
                    setIsUploading(false)
                }} className={({isActive}) => (isActive ? `${classes.active} ${classes.applications}` : undefined)} to={paths.APPLICATIONS}>applications</NavLink>
                {" "}
                <NavLink onClick={() => setIsUploading(true)} className={({isActive}) => (isActive ? `${classes.active} ${classes.upload}` : undefined)} to={paths.UPLOAD}>upload new</NavLink>
                <div className={classes.selector}/>
            </nav>
        </>
    )
}

export default MyPosts;
