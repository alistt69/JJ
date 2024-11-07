import classes from "./classes.module.scss"
import { useGetAllUsersQuery } from "@/api/user";
import { useUserInit } from "@/hooks/init";
import { useGetAllApplicationsQuery } from "@/api/posts";

const Applications = () => {

    const user = useUserInit()

    const { data: applications } = useGetAllApplicationsQuery(user.id)

    console.log(applications);

    return(
        <>
            <p className={classes.head}>Vacancies page</p>
            {applications?.map(application => (
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