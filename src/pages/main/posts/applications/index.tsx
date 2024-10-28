import { useUserInit } from "@/hooks/init";
import FullCard from "@/components/cards/applications/vFU";
import { useUpdatePostsMutation } from "@/api/auth";
import { handleDeleting } from "@/services/posts/deleting";
import NoData from "@/components/no-data";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ApplicationsEditing from "@/pages/main/posts/applications/components/edit";

const MyApplications = () => {

    const user = useUserInit();
    const dispatch = useDispatch();
    const [ updatePosts ] = useUpdatePostsMutation()

    const applications = user.applications

    const [editingId, setEditingId] = useState<string>('');

    return(
        <>
            {
                applications.length ?
                    applications.map((item) => (
                        <div key={item.id}>
                            {editingId !== item.id ?

                                <FullCard profession={item.profession}
                                          description={item.description}
                                          location={item.location}
                                          salary={item.salary}
                                          appId={item.id}
                                          withEdit={true}
                                          setEditingId={setEditingId}
                                          handleDeleting={() => handleDeleting(item.id, applications, updatePosts, user, dispatch, "applications")} />
                                :

                                <ApplicationsEditing profession={item.profession}
                                                     description={item.description}
                                                     location={item.location}
                                                     salary={item.salary}
                                                     appId={item.id}
                                                     setEditingId={setEditingId} />
                            }
                        </div>
                    )) :
                    <NoData />
            }
        </>
    )
}

export default MyApplications;
