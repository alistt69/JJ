/*import {useUserInit} from "@/hooks/init";
import FullCard from "@/components/cards/cvs/vFU";
import { useState } from "react";
import CvsEditing from "@/pages/main/posts/cvs/components/edit";
import NoData from "@/components/no-data";
import { useDispatch } from "react-redux";
import { useUpdateCvsMutation } from "@/api/user";
import { updateCvs } from "@/store/reducers/auth/authSlice.ts";*/


const MyCvs = () => {

   /* const user = useUserInit();
    const dispatch = useDispatch();
    const [ updateServerCvs ] = useUpdateCvsMutation()

    const cvs = user.cvs;

    const [editingId, setEditingId] = useState<string>('');

    const sendData = (cvs_id: string) => {

        const newCvs = cvs.filter(item => item.id !== cvs_id);

        updateServerCvs({id: user.id, newCvs})
            .then(() => {
                dispatch(updateCvs(newCvs))
                alert('success')
            })
            .catch((e) => alert(e))
    }*/

    return(
        <>
            {/*{
                cvs.length ?
                    cvs.map((item) => (
                        <div key={item.id}>
                            {editingId !== item.id ?

                                <FullCard name={item.name}
                                          description={item.description}
                                          location={item.location}
                                          cvsId={item.id}
                                          profession={item.profession}
                                          salary={item.salary}
                                          setEditingId={setEditingId}
                                          withEdit={true}
                                          handleDeleting={() => sendData(item.id)} />
                                :

                                <CvsEditing name={item.name}
                                            description={item.description}
                                            location={item.location}
                                            cvsId={item.id}
                                            profession={item.profession}
                                            salary={item.salary}
                                            setEditingId={setEditingId} />
                            }
                        </div>
                    )) :
                    <NoData />
            }*/}
            cvs
        </>
    )
}

export default MyCvs;
