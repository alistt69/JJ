import classes from "./classes.module.scss"
import {NavLink, useNavigate} from "react-router-dom";
import {paths} from "@/routes/routes.ts";
import {useFunctions} from "@/context/context.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {resetUsername} from "@/store/reducers/auth/authSlice.ts";
import { LoginOutlined } from "@ant-design/icons"

const Sidebar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(resetUsername());
        navigate("/");
    };

    const {offersLink} = useFunctions()
    const username = useSelector((state: RootState) => state.auth.username);


    return(
        <>

            <div className={classes.sidebar_container}>
                <div className={classes.user_info}>
                    <div>
                        {username ? username[0] : '?'}
                    </div>
                    <div>
                        {username}
                    </div>
                    <div onClick={handleSignOut}>
                        <LoginOutlined />
                    </div>
                </div>
                <ul>
                    <p>main menu</p>

                    <li>
                        <NavLink to={paths.HOME} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                            {'>'} HOME
                        </NavLink>

                    </li>

                    <li>
                        <NavLink to={paths.ABOUT} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                            {'>'} ABOUT
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'1'} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                            {'>'} NOTIFICATIONS
                        </NavLink>
                    </li>

                    <p>jobs</p>

                    <li>
                        <NavLink to={offersLink} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                            {'>'} OFFERS
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={paths.LIKED} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                            {'>'} LIKED
                        </NavLink>
                    </li>

                    <p>help</p>

                    <li>
                        <NavLink to={paths.HELP} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                            {'>'} HELP
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to={'2'} className={({isActive}) => (isActive ? `${classes.active}` : undefined)}>
                            {'>'} FAQ
                        </NavLink>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Sidebar;