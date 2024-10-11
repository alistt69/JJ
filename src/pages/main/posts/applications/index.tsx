import {useUserInit} from "@/hooks/init";
import FullCard from "@/components/cards/applications/vFU";

const MyApplications = () => {

    const user = useUserInit();

    if (!user || !user.applications) {
        return null;
    }

    const applications = user.applications;

    return(
        <>
            {applications.map((item) => (
                <FullCard name={item.name} description={item.description} location={item.location} salary={item.salary} appId={item.id ? item.id : ''} key={item.id} />
            ))}
        </>
    )
}

export default MyApplications;
