import React, {ReactNode} from "react";
import classes from "./classes.module.scss"
import Nav from "@/components/containers/main/components/nav";
import Sidebar from "@/components/sidebar";

const MainContainer: React.FC<{children: ReactNode}> = ({ children }) => {

    return(
        <>
            <div className={classes.wrap}>
                <Sidebar />
                <div className={classes.content_container}>
                    <Nav />
                    <div className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer;