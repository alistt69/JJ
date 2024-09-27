import classes from "./classes.module.scss"
import SignIn from "@/pages/auth/components/sign-in";
import SignUp from "@/pages/auth/components/sign-up";
import Layer from "@/pages/auth/components/components/layer";

const AuthPage = () => {

    return(
        <>
            <div className={classes.auth_container}>
                <SignIn />
                <SignUp />
                <Layer />
            </div>
        </>
    )
}

export default AuthPage;