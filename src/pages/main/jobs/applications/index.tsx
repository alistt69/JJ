import classes from "./classes.module.scss"
import { useGetAllUsersQuery } from "../../../../api/user";
import { useUserInit } from "@/hooks/init";

const Applications = () => {

    const user = useUserInit()

    const { data: users } = useGetAllUsersQuery(user.username);

    const allApplications = users?.flatMap(user => user.applications) || [];

    return(
        <>
            <p className={classes.head}>Vacancies page</p>
            {allApplications.map(application => (
                <div key={application.id}>
                    <h3>{application.profession}</h3>
                    <p>{application.description}</p>
                    <p>Salary: {application.salary}</p>
                    <p>Location: {application.location}</p>
                </div>
            ))}
        </>
    )
}

export default Applications;