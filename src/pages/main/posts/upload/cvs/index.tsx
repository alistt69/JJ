import { updateCvs } from "@/store/reducers/auth/authSlice.ts";
import { useAddCvMutation } from "@/api/posts";
import { paths } from "@/routes/routes.ts";

import React, { useState } from "react";
import { generateId } from "@/services/id_generator";
import { useNavigate } from "react-router-dom";
import { useUserInit } from "@/hooks/init";
import { useDispatch } from "react-redux";
import { ItemCvs } from "@/models/user";

import classes from "../styles/classes.module.scss";
import { useNotification } from "@/context/notification.tsx";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";


const UploadCvs = () => {

    const dispatch = useDispatch();

    const user = useUserInit();
    const { notify } = useNotification();
    const navigate = useNavigate();
    const [newName, setNewName] = useState("");
    const [newSalary, setNewSalary] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newProfession, setNewProfession] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [currency, setNewCurrency] = useState("$");
    const [ addCv ] = useAddCvMutation();


    const handleCvAdding = (e: React.FormEvent) => {
        e.preventDefault();
        const new_cv: ItemCvs = {
            id: generateId(),
            author_id: user.id,
            profession: newProfession,
            name: newName,
            description: newDescription,
            salary: newSalary + currency,
            location: newLocation
        };

        addCv(new_cv)
            .then(() => {
                dispatch(updateCvs([...user.cvs, new_cv.id]));
                navigate(`/${paths.MAIN}/${paths.MYPOSTS}/${paths.CVS}`);
                notify(<CheckOutlined style={{color: "green"}} />, 'success', 'new cv added successfully!')
            })
            .catch((e) =>  notify(<CloseOutlined style={{color: "darkred"}} />, 'failure', e));

    };

    return(
        <form className={classes.form} onSubmit={handleCvAdding}>
            <div className={`${classes.input_container} ${classes.profession}`}>
                <input type="input" className={classes.form_field} placeholder="profession"
                       autoComplete="off" name="profession" id="profession" value={newProfession}
                       onChange={(e) => setNewProfession(e.target.value)} required/>
                <label htmlFor="profession" className={classes.form_label}>profession</label>
            </div>

            <div className={`${classes.input_container} ${classes.location}`}>
                <input type="input" className={classes.form_field} placeholder="location"
                       autoComplete="off" name="location" id="location" value={newLocation}
                       onChange={(e) => setNewLocation(e.target.value)} required/>
                <label htmlFor="location" className={classes.form_label}>location</label>
            </div>

            <div className={`${classes.input_container} ${classes.salary}`}>
                <input type="number" className={classes.form_field} placeholder="salary"
                       autoComplete="off" name="salary" id="salary" value={newSalary}
                       onChange={(e) => setNewSalary(e.target.value)} required/>
                <label htmlFor="salary" className={classes.form_label}>starting salary</label>
                <select id="currency" value={currency} onChange={(e) => setNewCurrency(e.target.value)}>
                    <option value="$">$ USD</option>
                    <option value="€">€ EUR</option>
                    <option value="₽">₽ RUB</option>
                </select>
            </div>

            <div className={`${classes.input_container} ${classes.name}`}>
                <input type="input" className={classes.form_field} placeholder="name"
                       autoComplete="off" name="name" id="name" value={newName}
                       onChange={(e) => setNewName(e.target.value)} required/>
                <label htmlFor="name" className={classes.form_label}>full name</label>
            </div>

            <div className={`${classes.input_container} ${classes.description}`}>
                <textarea
                    className={`${classes.form_field} ${classes.form_area}`} placeholder="description"
                    autoComplete="off" name="description" id="description" value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)} required/>
                <label htmlFor="description" className={classes.form_label}>description</label>
            </div>
            <button className={classes.submit_btn} type="submit">PUSH!</button>
        </form>
    );
};

export default UploadCvs;
