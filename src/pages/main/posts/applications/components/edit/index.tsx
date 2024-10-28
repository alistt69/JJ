import { CloseOutlined } from "@ant-design/icons";
import classes from "./classes.module.scss";
import { handleEditing } from "@/services/posts/editing";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useUpdatePostsMutation } from "@/api/auth";
import { updateApplications } from "@/store/reducers/auth/authSlice.ts";
import { useDispatch } from "react-redux";
import { useUserInit } from "@/hooks/init";

const ApplicationsEditing: React.FC<{
    appId: string,
    profession: string,
    description: string,
    location: string,
    salary: string,
    setEditingId: Dispatch<SetStateAction<string>>,
}> = ({ appId, profession, description, location, salary, setEditingId }) => {

    const dispatch = useDispatch();
    const [ updatePosts ] = useUpdatePostsMutation()

    const user = useUserInit();
    const post = user.applications;


    const [newProfession, setNewProfession] = useState(profession)
    const [newLocation, setNewLocation] = useState(location)
    const [newSalary, setNewSalary] = useState(salary)
    const [newDescription, setNewDescription] = useState(description)


    const handleEditingApplications = () => {

        const newArr = post.map(item => {
            if (item.id === appId) {
                return {
                    ...item,
                    profession: newProfession,
                    description: newDescription,
                    salary: newSalary,
                    location: newLocation
                };
            }
            return item;
        });

        dispatch(updateApplications(newArr));
        setEditingId('');

        return newArr;
    };

    return(
        <>
            <form className={classes.input_container} onSubmit={(e) => handleEditing(
                e,
                updatePosts,
                user.id,
                "applications",
                handleEditingApplications
            )}>
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