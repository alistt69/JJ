import React, {ReactNode} from "react";
import classes from "./classes.module.scss"

const CardsContainer: React.FC<{children: ReactNode}> = ({ children }) => {

    return(
        <>
            <div className={classes.wrap}>
                {children}
            </div>
        </>
    )
}

export default CardsContainer;
