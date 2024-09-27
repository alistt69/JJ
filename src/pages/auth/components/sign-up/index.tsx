import Inputs from "@/pages/auth/components/components/inputs";
import classes from "./classes.module.scss";
import Icons from "@/pages/auth/components/components/icons";
import {NavLink} from "react-router-dom";
import {paths} from "@/routes/routes.ts";

const SignUp = () => {

    return(
        <>
            <div className={classes.signup_container}>
                <p>Sign Up</p>
                <Icons/>
                <Inputs number="Up"/>
                <NavLink to={`${paths.MAIN}/${paths.HOME}`}>SIGN UP</NavLink>
            </div>
        </>
    )
}

export default SignUp;