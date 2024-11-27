import classes from "./classes.module.scss";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import React from "react";


interface PasswordVisibilityToggleProps {
    isVisible: boolean | undefined;
    toggleVisibility: () => void;
}

const PasswordVisibilityToggle: React.FC<PasswordVisibilityToggleProps> = ({ isVisible, toggleVisibility }) => {
    return (
        <div className={classes.password_visibility_toggle} onClick={toggleVisibility}>
            {isVisible ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </div>
    );
};

export default PasswordVisibilityToggle;
