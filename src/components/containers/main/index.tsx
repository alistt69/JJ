import React, {ReactNode} from "react";
import classes from "./classes.module.scss"
import Sidebar from "@/components/containers/main/components/sidebar";
import Nav from "@/components/containers/main/components/nav";

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