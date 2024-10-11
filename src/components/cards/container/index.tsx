import React, {ReactNode} from "react";
import classes from "./classes.module.scss"

const CardsContainer: React.FC<{children: ReactNode}> = ({ children }) => {

    return(
        <>
            <div className={classes.wrap}>
                <div className={classes.cards}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default CardsContainer;
