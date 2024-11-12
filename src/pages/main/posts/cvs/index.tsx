import { updateCvs } from "@/store/reducers/auth/authSlice.ts";
import { useDeleteUsersCvMutation } from "@/api/user";
import { useDeletePostMutation } from "@/api/posts";

import { useGettingUserCvs } from "@/hooks/cvs";
import { useUserInit } from "@/hooks/init";
import { useDispatch } from "react-redux";
import { useState } from "react";

import CvsEditing from "@/pages/main/posts/cvs/components/edit";
import FullCard from "@/components/cards/cvs/vFU";
import NoData from "@/components/no-data";


const MyCvs = () => {

    const dispatch = useDispatch();

    const user = useUserInit();
    const cvs = useGettingUserCvs()
    const [editingId, setEditingId] = useState<string>('');
    const [ deletePost ] = useDeletePostMutation();
    const [ deleteUsersCv ] = useDeleteUsersCvMutation()


    const handlePostDeleting = (post_id: string, post_type: string) => {
        const newCvsArr: string[] = user.cvs.filter(item => item !== post_id);

        Promise.all([
                deletePost({ post_id, post_type }),
                deleteUsersCv({ id: user.id, newCvsArr })
            ])
            .then(() => {
                dispatch(updateCvs(newCvsArr));
                alert('success');
            })
            .catch((e) => alert(e));
    }

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
                                          handleDeleting={() => handlePostDeleting(item.id, "cvs")} />
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
