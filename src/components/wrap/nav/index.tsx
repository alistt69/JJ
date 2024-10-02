import {useLocation, Location, Link} from "react-router-dom";
import classes from './classes.module.scss'


const Nav = () => {

    const location: Location = useLocation()

    let current: string = ''

    const crumbs = location.pathname.split("/").filter(crumb => crumb !== '').map(crumb => {
        current += `/${crumb}`

        return(
            <div className={classes.nav} key={crumb}>
                <Link to={current}>{crumb}</Link>
            </div>
        )
    })

    return(
        <>
            <div className={classes.navs}>
                <div className={classes.nav_wrap}>
                    <div className={classes.nav}>
                        <Link to='/' className={classes.main}>🏠︎</Link>
                    </div>
                    {crumbs}
                </div>
            </div>
        </>
    )
}

export default Nav;
