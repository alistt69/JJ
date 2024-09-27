import React, {ReactNode} from "react";
import classes from "./classes.module.scss"
import Nav from "@/components/wrap/nav";

const Div: React.FC<{children: ReactNode}> = ({ children }) => {

    return(
        <>
            <div className={classes.wrap}>
                <Nav />
                <div className={classes.container}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Div;