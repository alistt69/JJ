import React, { Dispatch, SetStateAction } from "react";
import classes from "./classes.module.scss"
import { DeleteOutlined, EditOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";


const FullCard: React.FC<{
    name: string;
    profession: string;
    description: string;
    location: string;
    salary: string;
    cvsId: string,
    withEdit: boolean,
    setEditingId: Dispatch<SetStateAction<string>>;
    handleDeleting: () => void;
}> = ({ name, profession, description, location, salary, cvsId, setEditingId, withEdit, handleDeleting }) => {

    return (
        <>
            <div className={classes.cart_container}>
                        <>
                            <div className={classes.profession}>
                                <p>{profession}</p>
                                {withEdit &&
                                    <div>
                                        <EditOutlined onClick={() => setEditingId(cvsId)}/>
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
                            <div className={classes.name}>Full name: {name}</div>
                            <div className={classes.location}>Location: {location}</div>
                            <div className={classes.salary}>Wanted salary: {salary}</div>
                            <div className={classes.description}>{description}</div>
                            <div className={classes.id}>{cvsId}</div>
                        </>
            </div>
        </>
    )
}

export default FullCard;