import { updateApplications } from "@/store/reducers/auth/authSlice.ts";
import { useDeleteUsersApplicationMutation } from "@/api/user";
import { useDeletePostMutation } from "@/api/posts";

import { useGettingUserApplications } from "@/hooks/applications";
import { useUserInit } from "@/hooks/init";
import { useDispatch } from "react-redux";
import { useState } from "react";

import ApplicationsEditing from "@/pages/main/posts/applications/components/edit";
import FullCard from "@/components/cards/applications/vFU";
import NoData from "@/components/no-data";
import { useNotification } from "@/context/notification.tsx";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";


const MyApplications = () => {

    const dispatch = useDispatch();

    const user = useUserInit();
    const { notify } = useNotification();
    const applications = useGettingUserApplications();
    const [editingId, setEditingId] = useState<string>('');
    const [ deletePost ] = useDeletePostMutation()
    const [ deleteUsersApplication ] = useDeleteUsersApplicationMutation();


    const handlePostDeleting = (post_id: string, post_type: string) => {
        const newApplicationsArr: string[] = user.applications.filter(item => item !== post_id);

        Promise.all([
                deletePost({ post_id, post_type }),
                deleteUsersApplication({ id: user.id, newApplicationsArr })
            ])
            .then(() => {
                dispatch(updateApplications(newApplicationsArr));
                notify(<CheckOutlined style={{color: "green"}} />, 'success', 'application deleted successfully!')
            })
            .catch((e) =>  notify(<CloseOutlined style={{color: "darkred"}} />, 'failure', e));
    };

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
                                          handleDeleting={() => handlePostDeleting(item.id, "applications")} />
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
    );
};

export default MyApplications;
