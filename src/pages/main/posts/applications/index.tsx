import { useUserInit } from "@/hooks/init";
import FullCard from "@/components/cards/applications/vFU";
import { useUpdateApplicationsMutation } from "@/api/auth";
import NoData from "@/components/no-data";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ApplicationsEditing from "@/pages/main/posts/applications/components/edit";
import { updateApplications } from "@/store/reducers/auth/authSlice.ts";

const MyApplications = () => {

    const user = useUserInit();
    const dispatch = useDispatch();
    const [ updateApplication ] = useUpdateApplicationsMutation()

    const applications = user.applications

    const [editingId, setEditingId] = useState<string>('');

    const sendData = (application_id: string) => {

        const newApplications = applications.filter(item => item.id !== application_id);

        updateApplication({id: user.id, newApplications})
            .then(() => {
                dispatch(updateApplications(newApplications))
                alert('success')
            })
            .catch((e) => alert(e))
    }
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
                                          handleDeleting={() => sendData(item.id)} />
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
