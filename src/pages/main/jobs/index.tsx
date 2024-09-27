import {NavLink} from "react-router-dom";
import {paths} from "@/routes/routes.ts";
import classes from "./classes.module.scss"
import {useFunctions} from "@/context/context.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/store";

const Jobs = () => {

    const {started, setStarted, isJobSeeker, setIsJobSeeker } = useFunctions()

    const handleClick = () => {
        setStarted(prev => !prev)
    }

    const username = useSelector((state: RootState) => state.auth.username);

    const handleChange = () => {
        setIsJobSeeker(!isJobSeeker)
    }

    return(
        <>
            <div className={classes.offers_container}>
                {started ?
                    <div className={classes.jobs_heading}>
                        You're searching offers as {' '}
                        {(isJobSeeker) ?

                            <NavLink to={paths.EMPLOYEES} onClick={handleChange}>a job seeker</NavLink>
                            :
                            <NavLink to={paths.VACANCIES} onClick={handleChange}>an employer</NavLink>
                        }
                    </div>
                    :
                    <div className={classes.start}>
                        <p className={classes.title}>Hello, {username}</p>
                        <p className={classes.subtitle}>JobaJob. Where Aspirations Meet Achievements.</p>
                        <NavLink to={paths.EMPLOYEES} className={classes.start_btn} onClick={handleClick}>START YOUR JOURNEY</NavLink>
                    </div>
                }

                <div className={`${classes.layer} ${started ? classes.started : ''}`}/>
            </div>
        </>
    )
}

export default Jobs;