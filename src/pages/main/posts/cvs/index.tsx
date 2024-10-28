import {useUserInit} from "@/hooks/init";
import FullCard from "@/components/cards/cvs/vFU";
import { useState } from "react";
import CvsEditing from "@/pages/main/posts/cvs/components/edit";
import NoData from "@/components/no-data";
import { handleDeleting } from "@/services/posts/deleting";
import { useDispatch } from "react-redux";
import { useUpdatePostsMutation } from "@/api/auth";

const MyCvs = () => {

    const user = useUserInit();
    const dispatch = useDispatch();
    const [ updatePosts ] = useUpdatePostsMutation()

    const cvs = user.cvs;

    const [editingId, setEditingId] = useState<string>('');

    return(
        <>
            {
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
                                          handleDeleting={() => handleDeleting(item.id, cvs, updatePosts, user, dispatch, "cvs")} />
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
            }
        </>
    )
}

export default MyCvs;
