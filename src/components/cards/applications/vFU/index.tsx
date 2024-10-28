import React, { Dispatch, SetStateAction } from "react";
import classes from "./classes.module.scss"
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

const FullCard: React.FC<{
    profession: string,
    description: string,
    location: string,
    salary: string,
    appId: string,
    withEdit: boolean,
    setEditingId: Dispatch<SetStateAction<string>>,
    handleDeleting: () => void,
}> = ({ profession, description, location, salary, appId, withEdit, setEditingId, handleDeleting }) => {

    return (
        <>
            <div className={classes.cart_container}>
                        <>
                            <div className={classes.name}>
                                <p>{profession}</p>
                                {withEdit &&
                                    <div>
                                        <EditOutlined onClick={() => setEditingId(appId)}/>
                                        <Popconfirm
                                            title="DELETING"
                                            description="Are you sure to delete this application?"
                                            icon={<QuestionCircleOutlined style={{color: 'red'}}/>}
                                            cancelText="yes"
                                            okText="no"
                                            onCancel={handleDeleting}
                                        >
                                            <DeleteOutlined/>
                                        </Popconfirm>
                                    </div>
                                }

                            </div>

                            <div className={classes.location}>
                                <p className={classes.heading}>Location: </p>
                                <p className={classes.subheading}>{location}</p>
                            </div>

                            <div className={classes.salary}>
                                <p className={classes.heading}>Starting salary: </p>
                                <p className={classes.subheading}>{salary}</p>
                            </div>

                            <div className={classes.description}>
                                <p>{description}</p>
                            </div>

                            <div className={classes.id}>
                                <p>{appId}</p>
                            </div>
                        </>
            </div>
        </>
    )
}

export default FullCard;