import Inputs from "@/pages/auth/components/components/inputs";
import classes from "./classes.module.scss";
import Icons from "@/pages/auth/components/components/icons";

const SignUp = () => {

    return(
        <>
            <div className={classes.signup_container}>
                <p className={classes.title}>Sign Up</p>
                <Icons/>
                <Inputs number="Up"/>
            </div>
        </>
    )
}

export default SignUp;