import { useFunctions } from "@/context/function.tsx";
import { NavLink } from "react-router-dom";
import { paths } from "@/routes/routes.ts";

import classes from "./classes.module.scss"


const MyPosts = () => {

    const { setIsJobSeeker, setIsUploading } = useFunctions()

    return (
        <>
            <p className={classes.name}>My posts</p>
            <nav className={classes.navigation}>
                <NavLink onClick={() => {
                    setIsJobSeeker(true)
                    setIsUploading(false)
                }} className={({isActive}) => (isActive ? `${classes.active} ${classes.cvs}` : undefined)} to={paths.CVS}>Cvs</NavLink>
                <NavLink onClick={() => {
                    setIsJobSeeker(false)
                    setIsUploading(false)
                }} className={({isActive}) => (isActive ? `${classes.active} ${classes.applications}` : undefined)} to={paths.APPLICATIONS}>Applications</NavLink>
                <NavLink onClick={() => setIsUploading(true)} className={({isActive}) => (isActive ? `${classes.active} ${classes.upload}` : undefined)} to={paths.UPLOAD}>Upload new</NavLink>
                <div className={classes.selector}/>
            </nav>
        </>
    )
}

export default MyPosts;
