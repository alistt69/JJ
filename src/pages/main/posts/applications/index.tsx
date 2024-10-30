import { useUserInit } from "@/hooks/init";
import FullCard from "@/components/cards/applications/vFU";
import { useUpdateApplicationsMutation } from "@/api/user";
import NoData from "@/components/no-data";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ApplicationsEditing from "@/pages/main/posts/applications/components/edit";
import { updateApplications } from "@/store/reducers/auth/authSlice.ts";
import { useGettingUserApplications } from "@/hooks/applications";
import { ItemApp } from "@/models/user";

const MyApplications = () => {

    const user = useUserInit();
    const dispatch = useDispatch();
    const [ updateServerApplications ] = useUpdateApplicationsMutation()

    const applications: ItemApp[] = useGettingUserApplications()

    console.log(applications)

    const [editingId, setEditingId] = useState<string>('');

    if (!applications) return null;

    const sendData = (application_id: string) => {

        const newApplications = applications.filter(item => item.id !== application_id);

        updateServerApplications({id: user.id, newApplications})
            .then(() => {
                dispatch(updateApplications(['aaaa']))
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
