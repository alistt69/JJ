import React, { Dispatch, SetStateAction } from "react";
import classes from "./classes.module.scss";


const Toggle: React.FC<{
    isShortSidebarOpen: boolean,
    setIsShortSidebarOpen: Dispatch<SetStateAction<boolean>>
}> = ({ isShortSidebarOpen, setIsShortSidebarOpen }) => {
    return (
        <div className={`${classes.sidebar_toggle} ${!isShortSidebarOpen && classes.arrow_forward}`}
             onClick={() => setIsShortSidebarOpen(!isShortSidebarOpen)}>
            <div className={classes.top}
                 onClick={() => setIsShortSidebarOpen(!isShortSidebarOpen)}/>
            <div className={classes.bottom}
                 onClick={() => setIsShortSidebarOpen(!isShortSidebarOpen)}/>
        </div>
    );
};

export default Toggle;
