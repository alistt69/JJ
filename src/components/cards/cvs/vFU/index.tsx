import React, {useState} from "react";
import classes from "./classes.module.scss"
import {CloseOutlined, EditOutlined} from "@ant-design/icons";
import {useUserInit} from "@/hooks/init";
import {useUpdateCvsMutation} from "@/api/auth";

const FullCard: React.FC<{
    name: string;
    profession: string;
    description: string;
    location: string;
    wantedSalary: string;
    cvsId: string,
}> = ({ name, profession, description, location, wantedSalary, cvsId }) => {

    const [newProfession, setNewProfession] = useState(profession)
    const [newName, setNewName] = useState(name)
    const [newLocation, setNewLocation] = useState(location)
    const [newDescription, setNewDescription] = useState(description)
    const [newSalary, setNewSalary] = useState(wantedSalary)
    const [editMode, setEditMode] = useState(false);
    const [objCopy, setObjCopy] = useState({
        profession: profession,
        name: name,
        description: description,
        wantedSalary: wantedSalary,
        location: location
    })

    const [updateCvs] = useUpdateCvsMutation()
    const user = useUserInit();
    if (!user || !user.cvs) {return null;}
    const cvs = user.cvs;

    function updateItemById(id: string) {
        return cvs.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    profession: newProfession,
                    name: newName,
                    description: newDescription,
                    wantedSalary: newSalary,
                    location: newLocation
                };
            }
            return item;
        });
    }

    const handleCvsChange = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newCvs = updateItemById(cvsId)
            const id: string = user ? user.id ? user.id : '' : ''
            await updateCvs({id, newCvs}).unwrap();
            setObjCopy({
                profession: newProfession,
                name: newName,
                description: newDescription,
                wantedSalary: newSalary,
                location: newLocation
            })
            console.log(objCopy);
            setEditMode(prev => !prev);
            alert(`Application ${cvsId} updated successfully!`);
        } catch (error) {
            alert(`Failed to update application ${cvsId}, cause of ${error}`);
        }
    }

    const handleCancellation = () => {

        if (objCopy) {
            const { name, profession, description, location, wantedSalary } = objCopy;
            console.log(name, profession, description, location, wantedSalary)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewProfession(_prev => {return profession})
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewName(_prev => {return name})
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewLocation(_prev => {return location})
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewDescription(_prev => {return description})
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewSalary(_prev => {return wantedSalary})
            setEditMode(prevState => !prevState)
        }
    }

    return (
        <>
            <div className={classes.cart_container}>
                {
                    !editMode ?
                        <>
                            <div className={classes.profession}>
                                <p>{newProfession}</p>
                                <EditOutlined onClick={() => setEditMode(prevState => !prevState)}/>
                            </div>
                            <div className={classes.name}>Full name: {newName}</div>
                            <div className={classes.location}>Location: {newLocation}</div>
                            <div className={classes.salary}>Wanted salary: {newSalary}</div>
                            <div className={classes.description}>{newDescription}</div>
                            <div className={classes.id}>{cvsId}</div>
                        </>
                        :
                        <>
                            <CloseOutlined className={classes.close} onClick={handleCancellation}/>
                            <form className={classes.input_container} onSubmit={handleCvsChange}>
                                <div className={classes.forms_container}>
                                    <input type="input" className={classes.form_field} placeholder="Aprofession"
                                           autoComplete="off" name="Aprofession" id="Aprofession" value={newProfession}
                                           onChange={(e) => setNewProfession(e.target.value)} required/>
                                    <label htmlFor="Aprofession" className={classes.form_label}>profession</label>
                                </div>

                                <div className={classes.forms_container}>
                                    <input type="input" className={classes.form_field} placeholder="Afullname"
                                           autoComplete="off" name="Afullname" id="Afullname" value={newName}
                                           onChange={(e) => setNewName(e.target.value)} required/>
                                    <label htmlFor="Afullname" className={classes.form_label}>full name</label>
                                </div>


                                <div className={classes.forms_container}>
                                    <input type="input" className={classes.form_field} placeholder="Alocation"
                                           autoComplete="off" name="Alocation" id="Alocation" value={newLocation}
                                           onChange={(e) => setNewLocation(e.target.value)} required/>
                                    <label htmlFor="Alocation" className={classes.form_label}>location</label>
                                </div>

                                <div className={classes.forms_container}>
                                    <input type="input" className={classes.form_field} placeholder="Wsalary"
                                           autoComplete="off" name="Wsalary" id="Wsalary" value={newSalary}
                                           onChange={(e) => setNewSalary(e.target.value)} required/>
                                    <label htmlFor="Wsalary" className={classes.form_label}>wanted salary</label>
                                </div>

                                <div className={classes.forms_description}>
                                    <textarea placeholder="description" autoComplete="off" name="Adescription"
                                              id="Adescription" value={newDescription}
                                              onChange={(e) => setNewDescription(e.target.value)} required/>
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