import { updateApplications } from "@/store/reducers/auth/authSlice.ts";
import { useEditPostMutation } from "@/api/posts";

import React, { Dispatch, SetStateAction, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useUserInit } from "@/hooks/init";
import { useDispatch } from "react-redux";

import classes from "./classes.module.scss";


const ApplicationsEditing: React.FC<{
    appId: string,
    profession: string,
    description: string,
    location: string,
    salary: string,
    setEditingId: Dispatch<SetStateAction<string>>,
}> = ({ appId, profession, description, location, salary, setEditingId }) => {

    const dispatch = useDispatch();

    const user = useUserInit();
    const [ editPost ] = useEditPostMutation()
    const [newSalary, setNewSalary] = useState(salary)
    const [newLocation, setNewLocation] = useState(location)
    const [newProfession, setNewProfession] = useState(profession)
    const [newDescription, setNewDescription] = useState(description)


    const handlePostEditing = (e: React.FormEvent, post_id: string, post_type: string) => {
        e.preventDefault()
        const new_post = {
            id: post_id,
            author_id: user.id,
            profession: newProfession,
            description: newDescription,
            salary: newSalary,
            location: newLocation
        }

        editPost({post_id, post_type, new_post})
            .then(() => {
                setEditingId('')
                dispatch(updateApplications([...user.applications]))
                alert('success')
            })
            .catch((e) => alert(e))
    }

    return(
        <>
            <form className={classes.input_container} onSubmit={(e) => handlePostEditing(e, appId, "applications")}>
                <CloseOutlined className={classes.close} onClick={() => setEditingId('')}/>
                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="app_profession"
                           autoComplete="off" name="app_profession" id="app_profession" value={newProfession} onChange={(e) => setNewProfession(e.target.value)} required/>
                    <label htmlFor="app_profession" className={classes.form_label}>profession</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="app_location"
                           autoComplete="off" name="app_location" id="app_location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} required/>
                    <label htmlFor="app_location" className={classes.form_label}>location</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="app_salary"
                           autoComplete="off" name="app_salary" id="app_salary" value={newSalary} onChange={(e) => setNewSalary(e.target.value)} required/>
                    <label htmlFor="app_salary" className={classes.form_label}>starting salary</label>
                </div>

                <div className={classes.forms_description}>
                    <textarea placeholder="app_description" autoComplete="off" name="app_description" id="app_description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} required/>
                </div>
                <button className={classes.submit_btn} type="submit">SAVE</button>
            </form>
        </>
    )
}

export default ApplicationsEditing;
