import classes from "./classes.module.scss";
import { useUserInit } from "@/hooks/init";
import { useGetAllCvsQuery } from "@/api/posts";

const Cvs = () => {

    const user = useUserInit()

    const { data: cvs } = useGetAllCvsQuery(user.id)

    return(
        <>
            <p className={classes.head}>Employees page</p>
            {cvs?.map(cv => (
                <div key={cv.id}>
                    <h3>{cv.profession}</h3>
                    <p className={classes.name}>Full name: {cv.name}</p>
                    <p className={classes.location}>Location: {cv.location}</p>
                    <p className={classes.salary}>Wanted salary: {cv.salary}</p>
                    <p className={classes.description}>{cv.description}</p>
                    <p className={classes.id}>{cv.id}</p>
                </div>
            ))}
        </>
    )
}

export default Cvs;