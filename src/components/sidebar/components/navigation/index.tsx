import React, { useEffect, useState } from "react";
import home from "@/components/sidebar/assets/home.png";
import about from "@/components/sidebar/assets/about.png";
import notification from "@/components/sidebar/assets/notification.png";
import myposts from "@/components/sidebar/assets/myposts.png";
import offers from "@/components/sidebar/assets/offers.png";
import liked from "@/components/sidebar/assets/liked.png";
import faq from "@/components/sidebar/assets/faq.png";
import classes from "./classes.module.scss";
import { NavLink } from "react-router-dom";
import { useFunctions } from "@/context/context.tsx";
import { paths } from "@/routes/routes.ts";


const Navigation: React.FC<{ isShortSidebarOpen: boolean }> = ({ isShortSidebarOpen }) => {

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

    const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.stopPropagation();
    };

    return (
        <nav className={`${classes.navigation} ${!isShortSidebarOpen ? classes.full : classes.short}`}>
            <ul>
                <p className={classes.section_name}>{!isShortSidebarOpen && 'main menu'}</p>

                <li className={!isShortSidebarOpen ? classes.full : classes.short}>
                    <NavLink to={"."}
                             end
                             className={({isActive}) => (isActive ? `${classes.active}` : undefined)}
                             onClick={handleNavLinkClick}>
                        <img src={home} alt={"home"}/> {!isShortSidebarOpen && 'Home'}
                    </NavLink>
                </li>

                <li className={!isShortSidebarOpen ? classes.full : classes.short}>
                    <NavLink to={paths.ABOUT}
                             className={({isActive}) => (isActive ? `${classes.active}` : undefined)}
                             onClick={handleNavLinkClick}>
                        <img src={about} alt={"about"}/> {!isShortSidebarOpen && 'About'}
                    </NavLink>
                </li>

                <li className={!isShortSidebarOpen ? classes.full : classes.short}>
                    <NavLink to={"1"}
                             className={({isActive}) => (isActive ? `${classes.active}` : undefined)}
                             onClick={handleNavLinkClick}>
                        <img src={notification} alt={"notifications"}/> {!isShortSidebarOpen && 'Notifications'}
                    </NavLink>
                </li>

                <p className={classes.section_name}>{!isShortSidebarOpen && 'jobs'}</p>

                <li className={!isShortSidebarOpen ? classes.full : classes.short}>
                    <NavLink to={link}
                             className={({isActive}) => (isActive ? `${classes.active}` : undefined)}
                             onClick={handleNavLinkClick}>
                        <img src={myposts} alt={"my posts"}/> {!isShortSidebarOpen && 'My posts'}
                    </NavLink>
                </li>

                <li className={!isShortSidebarOpen ? classes.full : classes.short}>
                    <NavLink to={`${paths.JOBS}/${offersLink}`}
                             className={({isActive}) => (isActive ? `${classes.active}` : undefined)}
                             onClick={handleNavLinkClick}>
                        <img src={offers} alt={"offers"}/> {!isShortSidebarOpen && 'Offers'}
                    </NavLink>
                </li>

                <li className={!isShortSidebarOpen ? classes.full : classes.short}>
                    <NavLink to={paths.LIKED}
                             className={({isActive}) => (isActive ? `${classes.active}` : undefined)}
                             onClick={handleNavLinkClick}>
                        <img src={liked} alt={"liked"}/> {!isShortSidebarOpen && 'Liked'}
                    </NavLink>
                </li>

                <p className={classes.section_name}>{!isShortSidebarOpen && 'help'}</p>

                <li className={!isShortSidebarOpen ? classes.full : classes.short}>
                    <NavLink to={"1"}
                             className={({isActive}) => (isActive ? `${classes.active}` : undefined)}
                             onClick={handleNavLinkClick}>
                        <img src={faq} alt={"faq"}/> {!isShortSidebarOpen && 'FAQ'}
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navigation;
