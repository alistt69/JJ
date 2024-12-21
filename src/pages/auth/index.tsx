import { useState } from "react";
import SignUpForm from "@/pages/auth/components/components/signup-form";
import SignInForm from "@/pages/auth/components/components/signin-form";
import Layer from "@/pages/auth/components/components/layer";
import classes from "./classes.module.scss"


const AuthPage = () => {
    const [layerIsOnRight, setLayerIsOnRight] = useState(true);

    return (
        <div className={classes.auth_container}>
            <div className={classes.auth_content}>
                <SignInForm layerIsOnRight={layerIsOnRight}/>
                <SignUpForm layerIsOnRight={layerIsOnRight}/>
                <Layer layerIsOnRight={layerIsOnRight} setLayerIsOnRight={setLayerIsOnRight}/>
            </div>
        </div>
    );
};

export default AuthPage;
