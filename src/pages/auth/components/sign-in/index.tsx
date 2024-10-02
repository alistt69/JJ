import Inputs from "@/pages/auth/components/components/inputs";
import classes from "./classes.module.scss"
import Icons from "@/pages/auth/components/components/icons";

const SignIn = () => {

    return(
        <>
            <div className={classes.signin_container}>
                <p>Sign In</p>
                <Icons />
                <Inputs number="In"/>
            </div>
        </>
    )
}

export default SignIn;