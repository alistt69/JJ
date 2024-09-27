import React, {ReactNode} from "react";
import classes from "./classes.module.scss"

const JobsWrap: React.FC<{children: ReactNode}> = ({ children }) => {

    return(
        <>
            <div className={classes.jobs}>
                {children}
            </div>
        </>
    )
}

export default JobsWrap;
