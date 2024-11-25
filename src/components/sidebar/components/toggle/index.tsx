import React, { Dispatch, SetStateAction } from "react";
import backward from "@/components/sidebar/assets/backward.png";
import classes from "./classes.module.scss";


const Toggle: React.FC<{
    isShortSidebarOpen: boolean,
    setIsShortSidebarOpen: Dispatch<SetStateAction<boolean>>
}> = ({ isShortSidebarOpen, setIsShortSidebarOpen }) => {
    return (
        <div className={`${classes.sidebar_toggle} ${!isShortSidebarOpen && classes.arrow_forward}`}
             onClick={() => setIsShortSidebarOpen(!isShortSidebarOpen)}>
            <img src={backward} alt={"forward"}/>
        </div>
    )
}

export default Toggle;
