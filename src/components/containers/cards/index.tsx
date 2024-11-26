import React, { ReactNode } from "react";
import classes from "./classes.module.scss";


const CardsContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return(
        <div className={classes.position_wrap}>
            <div className={classes.content_wrap}>
                {children}
            </div>
        </div>
    );
};

export default CardsContainer;
