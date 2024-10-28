import { CloseOutlined } from "@ant-design/icons";
import classes from "./classes.module.scss";
import { handleEditing } from "@/services/posts/editing";
import React, { Dispatch, SetStateAction, useState } from "react";
import { updateCvs } from "@/store/reducers/auth/authSlice.ts";
import { useDispatch } from "react-redux";
import { useUpdatePostsMutation } from "@/api/auth";
import { useUserInit } from "@/hooks/init";

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
    const [ updatePosts ] = useUpdatePostsMutation()

    const user = useUserInit();
    const post = user.cvs;

    const [newProfession, setNewProfession] = useState(profession)
    const [newName, setNewName] = useState(name)
    const [newLocation, setNewLocation] = useState(location)
    const [newDescription, setNewDescription] = useState(description)
    const [newSalary, setNewSalary] = useState(salary)


    const handleEditingCvs = () => {
        const newArr = post.map(item => {
            if (item.id === cvsId) {
                return {
                    ...item,
                    profession: newProfession,
                    name: newName,
                    description: newDescription,
                    salary: newSalary,
                    location: newLocation
                };
            }
            return item;
        });

        dispatch(updateCvs(newArr));
        setEditingId('');
        return newArr;
    };

    return(
        <>
            <form className={classes.input_container} onSubmit={(e) => handleEditing(
                e,
                updatePosts,
                user.id,
                "cvs",
                handleEditingCvs
            )}>
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