import { paths } from "@/routes/routes.ts";

import { useFunctions } from "@/context/context.tsx";
import { SlackOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Profile from "@/components/sidebar/profile";

import classes from "./classes.module.scss"


const Sidebar = () => {

    const { offersLink, isUploading } = useFunctions()
    
    const [link, setLink] = useState<string>('')
    
    useEffect(() => {
        if (isUploading) {
            setLink(`${paths.MYPOSTS}/${paths.UPLOAD}`)
        } else {
            if (offersLink === paths.CVS) {
                setLink(`${paths.MYPOSTS}/${paths.APPLICATIONS}`)
            } else {
                setLink(`${paths.MYPOSTS}/${paths.CVS}`)
            }
        }
    }, [isUploading, offersLink]) //TODO: fix shitcode
        

    return(
        <>
            <aside className={classes.sidebar}>

                <div className={classes.heading}>
                    <SlackOutlined />
                    JobaJob
                </div>

                <nav className={classes.navigation}>
                    <ul>
                        <p className={classes.section_name}>main menu</p>

                        <li>
                            <NavLink to={"."} end className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                                {">"} Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={paths.ABOUT} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                                {">"} About
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={'1'} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                                {">"} Notifications
                            </NavLink>
                        </li>

                        <p className={classes.section_name}>jobs</p>

                        <li>
                            <NavLink to={link} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                                {">"} My posts
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={`${paths.JOBS}/${offersLink}`}
                                     className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                                {">"} Offers
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={paths.LIKED}
                                     className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                                {">"} Liked
                            </NavLink>
                        </li>

                        <p className={classes.section_name}>help</p>

                        {/*<li>
                        <NavLink to={paths.HELP}
                                 className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                            <SubnodeOutlined /> Help
                        </NavLink>
                    </li>*/}

                        <li>
                            <NavLink to={'2'} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                                {">"} FAQ
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                <Profile/>
            </aside>
        </>
    )
}

export default Sidebar;