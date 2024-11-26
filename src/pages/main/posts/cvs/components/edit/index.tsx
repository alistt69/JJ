import { updateCvs } from "@/store/reducers/auth/authSlice.ts";
import { useEditPostMutation } from "@/api/posts";

import React, { Dispatch, SetStateAction, useState } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useUserInit } from "@/hooks/init";
import { useDispatch } from "react-redux";

import classes from "./classes.module.scss";
import { useNotification } from "@/context/notification.tsx";


const CvsEditing: React.FC<{
    name: string;
    profession: string;
    description: string;
    location: string;
    salary: string;
    cvsId: string,
    setEditingId: Dispatch<SetStateAction<string>>,
}> = ({ name, profession, description, location, salary, cvsId, setEditingId }) => {

    const dispatch = useDispatch();

    const user = useUserInit();
    const { notify } = useNotification();
    const [ editPost ] = useEditPostMutation()
    const [newName, setNewName] = useState(name)
    const [newSalary, setNewSalary] = useState(salary)
    const [newLocation, setNewLocation] = useState(location)
    const [newProfession, setNewProfession] = useState(profession)
    const [newDescription, setNewDescription] = useState(description)


    const handlePostEditing = (e: React.FormEvent, post_id: string, post_type: string) => {
        e.preventDefault()
        const new_post = {
            id: post_id,
            author_id: user.id,
            name: newName,
            profession: newProfession,
            description: newDescription,
            location: newLocation,
            salary: newSalary
        }

        editPost({post_id, post_type, new_post})
            .then(() => {
                setEditingId('')
                dispatch(updateCvs([...user.cvs]))
                notify(<CheckOutlined style={{color: "green"}} />, 'success', 'cv edited successfully!')
            })
            .catch((e) =>  notify(<CloseOutlined style={{color: "darkred"}} />, 'failure', e))
    }

    return(
        <>
            <form className={classes.input_container} onSubmit={(e) => handlePostEditing(e, cvsId, "cvs")}>
                <CloseOutlined className={classes.close} onClick={() => setEditingId('')}/>
                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="cvs_profession"
                           autoComplete="off" name="cvs_profession" id="cvs_profession" value={newProfession}
                           onChange={(e) => setNewProfession(e.target.value)} required/>
                    <label htmlFor="cvs_profession" className={classes.form_label}>profession</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="cvs_fullname"
                           autoComplete="off" name="cvs_fullname" id="cvs_fullname" value={newName}
                           onChange={(e) => setNewName(e.target.value)} required/>
                    <label htmlFor="cvs_fullname" className={classes.form_label}>full name</label>
                </div>


                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="cvs_location"
                           autoComplete="off" name="cvs_location" id="cvs_location" value={newLocation}
                           onChange={(e) => setNewLocation(e.target.value)} required/>
                    <label htmlFor="cvs_location" className={classes.form_label}>location</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="cvs_salary"
                           autoComplete="off" name="cvs_salary" id="cvs_salary" value={newSalary}
                           onChange={(e) => setNewSalary(e.target.value)} required/>
                    <label htmlFor="cvs_salary" className={classes.form_label}>wanted salary</label>
                </div>

                <div className={classes.forms_description}>
                                    <textarea placeholder="cvs_description" autoComplete="off" name="cvs_description"
                                              id="cvs_description" value={newDescription}
                                              onChange={(e) => setNewDescription(e.target.value)} required/>
                </div>
                <button className={classes.submit_btn} type="submit">SAVE</button>
            </form>
        </>
    )
}

export default CvsEditing;