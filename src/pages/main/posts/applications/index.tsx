import {useUserInit} from "@/hooks/init";
import FullCard from "@/components/cards/applications/vFU";
import { useUpdatePostsMutation } from "@/api/auth";
import {handleDeleting} from "@/services/posts/deleting";

const MyApplications = () => {

    const user = useUserInit();

    const [updatePosts] = useUpdatePostsMutation()

    const applications = user.applications;

    return(
        <>
            {applications.map((item) => (
                <FullCard name={item.name}
                          description={item.description}
                          location={item.location}
                          salary={item.salary}
                          appId={item.id ? item.id : ''}
                          handleDeleting={() => handleDeleting(item.id ? item.id : '', applications, updatePosts, user, "applications")} key={item.id} />
            ))}
        </>
    )
}

export default MyApplications;
