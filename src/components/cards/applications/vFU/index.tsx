import React, {useState} from "react";
import classes from "./classes.module.scss"
import {CloseOutlined, EditOutlined, DeleteOutlined, QuestionCircleOutlined} from "@ant-design/icons";
import {useUserInit} from "@/hooks/init";
import { useUpdatePostsMutation } from "@/api/auth";
import {Popconfirm} from "antd";
import {handleEditing} from "@/services/posts/editing";
import { useDispatch } from "react-redux";
import { updateApplications } from "@/store/reducers/auth/authSlice.ts";

const FullCard: React.FC<{
    name: string,
    description: string,
    location: string,
    salary: string,
    appId: string,
    handleDeleting: () => void,
}> = ({ name, description, location, salary, appId, handleDeleting }) => {

    const [newProfession, setNewProfession] = useState(name)
    const [newLocation, setNewLocation] = useState(location)
    const [newSalary, setNewSalary] = useState(salary)
    const [newDescription, setNewDescription] = useState(description)
    const [editMode, setEditMode] = useState(false);
    const [objCopy, setObjCopy] = useState({
        name: name,
        description: description,
        salary: salary,
        location: location
    })

    const [updatePost] = useUpdatePostsMutation()

    const user = useUserInit();
    const post = user.applications;

    const dispatch = useDispatch();

    const handleCancellation = () => {

        if (objCopy) {
            const { name, description, location, salary } = objCopy;
            console.log(name, description, location, salary)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewProfession(_prev => {return name})
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewLocation(_prev => {return location})
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewDescription(_prev => {return description})
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            setNewSalary(_prev => {return salary})
            setEditMode(prevState => !prevState)
        }
    }

    const handleEditing1 = () => {
        const newArr = post.map(item => {
            if (item.id === appId) {
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

        dispatch(updateApplications(newArr));

        setObjCopy({
            name: newProfession,
            description: newDescription,
            salary: newSalary,
            location: newLocation
        })

        return newArr;
    };

    return (
        <>
            <div className={classes.cart_container}>
                {
                    !editMode ?
                        <>
                            <div className={classes.name}>
                                <p>{newProfession}</p>
                                <div>
                                    <EditOutlined onClick={() => setEditMode(prevState => !prevState)}/>
                                    <Popconfirm
                                        title="DELETING"
                                        description="Are you sure to delete this application?"
                                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                        cancelText="yes"
                                        okText="no"
                                        onCancel={handleDeleting}
                                    >
                                        <DeleteOutlined />
                                    </Popconfirm>
                                </div>
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
                            <form className={classes.input_container} onSubmit={(e) => handleEditing(
                                e,
                                appId,
                                post,
                                "",
                                newProfession,
                                newSalary,
                                newDescription,
                                newLocation,
                                updatePost,
                                setObjCopy,
                                setEditMode,
                                user,
                                "applications",
                                dispatch,
                                handleEditing1
                            )}>
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