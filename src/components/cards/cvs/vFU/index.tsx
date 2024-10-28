import React, { Dispatch, SetStateAction } from "react";
import classes from "../../styles/vFU/classes.module.scss"
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
    setEditingId?: Dispatch<SetStateAction<string>>;
    handleDeleting?: () => void;
}> = ({ name, profession, description, location, salary, cvsId, setEditingId, withEdit, handleDeleting }) => {

    return (
        <>
            <div className={classes.cart_container}>
                <div className={classes.profession}>
                    <p>{profession}</p>
                    {withEdit && setEditingId && handleDeleting &&
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
                <p className={classes.name}>Full name: {name}</p>
                <p className={classes.location}>Location: {location}</p>
                <p className={classes.salary}>Wanted salary: {salary}</p>
                <p className={classes.description}>{description}</p>
                <p className={classes.id}>{cvsId}</p>
            </div>
        </>
    )
}

export default FullCard;