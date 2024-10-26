import { useUserInit } from "@/hooks/init";
import FullCard from "@/components/cards/applications/vFU";
import { useUpdatePostsMutation } from "@/api/auth";
import { handleDeleting} from "@/services/posts/deleting";
import NoData from "@/components/no-data";
import { useDispatch } from "react-redux";


const MyApplications = () => {

    const user = useUserInit();
    const dispatch = useDispatch();
    const [ updatePosts ] = useUpdatePostsMutation()

    const applications = user.applications

    return(
        <>
            {
                applications.length ?
                    applications.map((item) => (

                        <FullCard name={item.name}
                                  description={item.description}
                                  location={item.location}
                                  salary={item.salary}
                                  appId={item.id}
                                  handleDeleting={() => handleDeleting(item.id, user.applications, updatePosts, user, dispatch, "applications")} key={item.id} />

                    )) :
                    <NoData />
            }
        </>
    )
}

export default MyApplications;
