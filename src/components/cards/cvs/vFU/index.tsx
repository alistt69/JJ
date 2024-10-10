import React, {useState} from "react";
import classes from "./classes.module.scss"
import {EditOutlined} from "@ant-design/icons";

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

    return (
        <>
            <div className={classes.cart_container}>
                <div className={classes.profession}>
                    <p>{profession}</p>
                    <EditOutlined />
                </div>
                <div className={classes.name}>Full name: {name}</div>
                <div className={classes.location}>Location: {location}</div>
                <div className={classes.salary}>Wanted salary: {wantedSalary}</div>
                <div className={classes.description}>{description}</div>
                <div className={classes.id}>{cvsId}</div>
            </div>
        </>
    )
}

export default FullCard;