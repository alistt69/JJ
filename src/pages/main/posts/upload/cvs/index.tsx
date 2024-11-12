import { updateCvs } from "@/store/reducers/auth/authSlice.ts";
import { useAddCvMutation } from "@/api/posts";
import { paths } from "@/routes/routes.ts";

import React, { useState } from "react";
import { generateId } from "@/services/id_generator";
import { useNavigate } from "react-router-dom";
import { useUserInit } from "@/hooks/init";
import { useDispatch } from "react-redux";
import { ItemCvs } from "@/models/user";

import classes from "./classes.module.scss";


const UploadCvs = () => {

    const dispatch = useDispatch();

    const user = useUserInit();
    const navigate = useNavigate();
    const [newName, setNewName] = useState("");
    const [newSalary, setNewSalary] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newProfession, setNewProfession] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [ addCv ] = useAddCvMutation()


    const handleCvAdding = (e: React.FormEvent) => {
        e.preventDefault()
        const new_cv: ItemCvs = {
            id: generateId(),
            author_id: user.id,
            profession: newProfession,
            name: newName,
            description: newDescription,
            salary: newSalary,
            location: newLocation
        }

        addCv(new_cv)
            .then(() => {
                dispatch(updateCvs([...user.cvs, new_cv.id]));
                navigate(`/${paths.MAIN}/${paths.MYPOSTS}/${paths.CVS}`)
                alert('success')
            })
            .catch((e) => alert(e))

    }

    return(
        <>
            <form className={classes.input_container} onSubmit={handleCvAdding}>
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
