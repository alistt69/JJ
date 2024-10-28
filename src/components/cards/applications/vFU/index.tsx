import React, { Dispatch, SetStateAction } from "react";
import classes from "./classes.module.scss"
import { EditOutlined, DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";


const FullCard: React.FC<{
    profession: string;
    description: string;
    location: string;
    salary: string;
    appId: string;
    withEdit: boolean;
    setEditingId?: Dispatch<SetStateAction<string>>;
    handleDeleting?: () => void;
}> = ({ profession, description, location, salary, appId, withEdit, setEditingId, handleDeleting }) => {
    return (
        <div className={classes.cart_container}>
            <div className={classes.name}>
                <p>{profession}</p>
                {withEdit && setEditingId && handleDeleting && (
                    <div>
                        <EditOutlined onClick={() => setEditingId(appId)} />
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
                )}
            </div>

            <p className={classes.location}>Location: {location}</p>
            <p className={classes.salary}>Starting salary: {salary}</p>
            <p className={classes.description}>{description}</p>
            <p className={classes.id}>{appId}</p>
        </div>
    );
};

export default FullCard;