import React, {useState} from "react";
import classes from "./classes.module.scss"
import {CloseOutlined, EditOutlined} from "@ant-design/icons";
import {useUserInit} from "@/hooks/init";
import {useUpdateApplicationsMutation} from "@/api/auth";

const FullCard: React.FC<{
    name: string,
    description: string,
    location: string,
    salary: string,
    appId: string,
}> = ({ name, description, location, salary, appId }) => {

    const user = useUserInit();
    const [editMode, setEditMode] = useState(false);
    const [newProfession, setNewProfession] = useState(name)
    const [newLocation, setNewLocation] = useState(location)
    const [newSalary, setNewSalary] = useState(salary)
    const [newDescription, setNewDescription] = useState(description)
    const [updateApplication] = useUpdateApplicationsMutation()

    if (!user || !user.applications) {
        return null;
    }

    const applications = user.applications;

    function updateItemById(id: string) {

        return applications.map(item => {

            if (item.id === id) {
                return {
                    ...item,
                    name: newProfession,
                    description: newDescription,
                    salary: newSalary,
                    location: newLocation
                };
            }
            return item;
        });
    }


    const handleAppChange = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newApplications = updateItemById(appId)
            const id: string = user ? user.id ? user.id : '' : ''
            await updateApplication({id, newApplications}).unwrap();
            setEditMode(prev => !prev);
            alert(`Application ${appId} updated successfully!`);
        } catch (error) {
            alert(`Failed to update application ${appId}, cause of ${error}`);
        }
    }

    const handleCancellation = () => {
        setNewProfession(name)
        setNewLocation(location)
        setNewDescription(description)
        setNewSalary(salary)
        setEditMode(prevState => !prevState)
    }

    return (
        <>
            <div className={classes.cart_container}>
                {
                    !editMode ?
                        <>
                            <div className={classes.name}>
                                <p>{newProfession}</p><EditOutlined onClick={() => setEditMode(prevState => !prevState)}/>
                            </div>

                            <div className={classes.location}>
                                <p className={classes.heading}>Location: </p>
                                <p className={classes.subheading}>{newLocation}</p>
                            </div>

                            <div className={classes.salary}>
                                <p className={classes.heading}>Starting salary: </p>
                                <p className={classes.subheading}>{newSalary}</p>
                            </div>

                            <div className={classes.description}>
                                <p>{newDescription}</p>
                            </div>

                            <div className={classes.id}>
                                <p>{appId}</p>
                            </div>
                        </>
                        :
                        <>
                            <CloseOutlined className={classes.close} onClick={handleCancellation}/>
                            <form className={classes.input_container} onSubmit={handleAppChange}>
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
                                <button className={classes.submit_btn} type="submit">SAVE</button>
                            </form>
                        </>
                }
            </div>


        </>
    )
}

export default FullCard;