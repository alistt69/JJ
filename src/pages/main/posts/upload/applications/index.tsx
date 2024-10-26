import classes from "./classes.module.scss";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {paths} from "@/routes/routes.ts";
import {useUpdateApplicationsMutation} from "@/api/auth";
import {useUserInit} from "@/hooks/init";

const UploadApplications = () => {

    const navigate = useNavigate();

    const [newProfession, setNewProfession] = useState("")
    const [newLocation, setNewLocation] = useState("")
    const [newSalary, setNewSalary] = useState("")
    const [newDescription, setNewDescription] = useState("")

    const [updateApplication] = useUpdateApplicationsMutation()
    const user = useUserInit();
    if (!user || !user.applications) {return null;}
    const applications = user.applications;

    const generateId = () => {
        const id: string = `ID${Date.now().toString().slice(-2)}${Math.random().toString(36).substring(2, 9).toUpperCase()}`
        return id;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const newApplications = [...applications]
            const newApplication = {
                id: generateId(),
                name: newProfession,
                description: newDescription,
                salary: newSalary,
                location: newLocation
            }
            newApplications.push(newApplication)
            const id: string = user ? user.id ? user.id : '' : ''
            await updateApplication({id, newApplications}).unwrap();
            alert(`Application added successfully!`);
            navigate(`/${paths.MAIN}/${paths.MYPOSTS}/${paths.APPLICATIONS}`)
        } catch (error) {
            alert(`Failed to add application, cause of ${error}`);
        }
    }

    return(
        <>
            <form className={classes.input_container} onSubmit={handleSubmit}>
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
