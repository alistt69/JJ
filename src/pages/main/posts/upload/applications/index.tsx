import classes from "./classes.module.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "@/routes/routes.ts";
import { useUpdateApplicationsMutation } from "../../../../../api/user";
import { useUserInit } from "@/hooks/init";
import { updateApplications } from "@/store/reducers/auth/authSlice.ts";
import { useDispatch } from "react-redux";
import { generateId } from "@/services/id_generator";

const UploadApplications = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [ updateServerApplications ] = useUpdateApplicationsMutation()

    const user = useUserInit();
    const applications = user.applications;

    const [newProfession, setNewProfession] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newSalary, setNewSalary] = useState("")
    const [newDescription, setNewDescription] = useState("")

    const applicationTransformer = () => {
        const newApplications = [...applications]
        newApplications.push({
                id: generateId(),
                profession: newProfession,
                description: newDescription,
                salary: newSalary,
                location: newLocation
        })
        return newApplications;
    }

    const sendData = (e: React.FormEvent) => {
        e.preventDefault()

        const newApplications = applicationTransformer()

        updateServerApplications({id: user.id, newApplications})
            .then(() => {
                dispatch(updateApplications(newApplications));
                navigate(`/${paths.MAIN}/${paths.MYPOSTS}/${paths.APPLICATIONS}`)
                alert('success')
            })
            .catch((e) => alert(e))

    }

    return(
        <>
            <form className={classes.input_container} onSubmit={sendData}>
                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="profession"
                           autoComplete="off" name="profession" id="profession" value={newProfession} onChange={(e) => setNewProfession(e.target.value)} required/>
                    <label htmlFor="profession" className={classes.form_label}>profession</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="location"
                           autoComplete="off" name="location" id="location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} required/>
                    <label htmlFor="location" className={classes.form_label}>location</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="salary"
                           autoComplete="off" name="salary" id="salary" value={newSalary} onChange={(e) => setNewSalary(e.target.value)} required/>
                    <label htmlFor="salary" className={classes.form_label}>starting salary</label>
                </div>

                <div className={classes.forms_description}>
                    <textarea placeholder="description" autoComplete="off" name="description" id="description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} required/>
                </div>
                <button className={classes.submit_btn} type="submit">PUSH!</button>
            </form>
        </>
    )
}

export default UploadApplications;
