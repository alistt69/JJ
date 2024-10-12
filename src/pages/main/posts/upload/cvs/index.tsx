import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {paths} from "@/routes/routes.ts";
import classes from "@/pages/main/posts/upload/applications/classes.module.scss";

const UploadCvs = () => {

    const navigate = useNavigate();

    const [newProfession, setNewProfession] = useState<string>();
    const [newName, setNewName] = useState<string>();
    const [newLocation, setNewLocation] = useState<string>();
    const [newSalary, setNewSalary] = useState<string>();
    const [newDescription, setNewDescription] = useState<string>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(newProfession, newLocation, newSalary, newDescription, newName)
        navigate(`/${paths.MAIN}/${paths.MYPOSTS}/${paths.APPLICATIONS}`)
    }

    return(
        <>
            <form className={classes.input_container} onSubmit={handleSubmit}>
                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="profession"
                           autoComplete="off" name="profession" id="profession" value={newProfession}
                           onChange={(e) => setNewProfession(e.target.value)} required/>
                    <label htmlFor="profession" className={classes.form_label}>profession</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="name"
                           autoComplete="off" name="name" id="name" value={newName}
                           onChange={(e) => setNewName(e.target.value)} required/>
                    <label htmlFor="name" className={classes.form_label}>full name</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="location"
                           autoComplete="off" name="location" id="location" value={newLocation}
                           onChange={(e) => setNewLocation(e.target.value)} required/>
                    <label htmlFor="location" className={classes.form_label}>location</label>
                </div>

                <div className={classes.forms_container}>
                    <input type="input" className={classes.form_field} placeholder="salary"
                           autoComplete="off" name="salary" id="salary" value={newSalary}
                           onChange={(e) => setNewSalary(e.target.value)} required/>
                    <label htmlFor="salary" className={classes.form_label}>starting salary</label>
                </div>

                <div className={classes.forms_description}>
                    <textarea placeholder="description" autoComplete="off" name="description" id="description"
                              value={newDescription} onChange={(e) => setNewDescription(e.target.value)} required/>
                </div>
                <button className={classes.submit_btn} type="submit">PUSH!</button>
            </form>
        </>
    )
}

export default UploadCvs;
