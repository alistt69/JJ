import Inputs from "@/pages/auth/components/components/inputs";
import classes from "./classes.module.scss"
import {NavLink} from "react-router-dom";
import {paths} from "@/routes/routes.ts";
import Icons from "@/pages/auth/components/components/icons";

const SignIn = () => {

    return(
        <>
            <div className={classes.signin_container}>
                <p>Sign In</p>
                <Icons />
                <Inputs number="In"/>
                <p>Forgot your password?</p>
                <NavLink to={`${paths.MAIN}/${paths.HOME}`}>SIGN IN</NavLink>
            </div>
        </>
    )
}

export default SignIn;