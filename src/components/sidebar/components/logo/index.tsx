import React from "react";
import { SlackOutlined } from "@ant-design/icons";
import classes from "./classes.module.scss";


const Logo: React.FC<{ isShortSidebarOpen: boolean }> = ({ isShortSidebarOpen }) => {
    return (
        <div className={classes.logo}>
            <SlackOutlined/>
            {!isShortSidebarOpen && <div className={classes.title}>JobaJob</div>}
        </div>
    );
};

export default Logo;
