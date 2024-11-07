import { useLocation, Location, NavLink } from "react-router-dom";
import classes from './classes.module.scss'


const Nav = () => {

    const location: Location = useLocation()

    let current: string = ''

    const crumbs = location.pathname.split("/").filter(crumb => crumb !== '').map(crumb => {
        current += `/${crumb}`

        return(
            <div className={classes.nav} key={crumb}>
                <NavLink to={current}>{crumb}</NavLink>
            </div>
        )
    })

    return(
        <>
            <div className={classes.navs}>
                <div className={classes.nav_wrap}>
                    {crumbs}
                </div>
            </div>
        </>
    )
}

export default Nav;
