import {NavLink} from "react-router-dom";
import classes from "./classes.module.scss"
import {paths} from "@/routes/routes.ts";

const Switcher = () => {

    return(
        <>
            <div className={classes.switcher}>
                <nav>
                    <NavLink to={paths.EMPLOYEES} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>EMPLOYEES</NavLink>
                    <NavLink to={paths.VACANCIES} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>VACANCIES</NavLink>
                    <div className={classes.animation}></div>
                </nav>
            </div>
        </>
    )
}

export default Switcher;