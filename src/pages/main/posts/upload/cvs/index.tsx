import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { paths } from "@/routes/routes.ts";
import classes from "./classes.module.scss";
import { handleEditing } from "@/services/posts/editing";
import { useUpdatePostsMutation } from "@/api/auth";
import { useUserInit } from "@/hooks/init";
import { generateId } from "@/services/id_generator";
import { updateCvs } from "@/store/reducers/auth/authSlice.ts";
import { useDispatch } from "react-redux";

const UploadCvs = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [ updatePosts ] = useUpdatePostsMutation()

    const user = useUserInit();
    const cvs = user.cvs

    const [newProfession, setNewProfession] = useState("");
    const [newName, setNewName] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newSalary, setNewSalary] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleCvsAdding = () => {
        const newCvs = [...cvs]

        newCvs.push({
            id: generateId(),
            profession: newProfession,
            name: newName,
            description: newDescription,
            salary: newSalary,
            location: newLocation
        })

        dispatch(updateCvs(newCvs));
        navigate(`/${paths.MAIN}/${paths.MYPOSTS}/${paths.CVS}`)

        return newCvs;
    }

    return(
        <>
            <form className={classes.input_container} onSubmit={(e) => handleEditing(
                e,
                updatePosts,
                user.id,
                "cvs",
                handleCvsAdding
            )}>
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
