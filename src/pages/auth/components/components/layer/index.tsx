import React, { Dispatch, SetStateAction } from "react";
import classes from "./classes.module.scss";


const Layer: React.FC<{ layerIsOnRight: boolean, setLayerIsOnRight: Dispatch<SetStateAction<boolean>> }> = ({ layerIsOnRight, setLayerIsOnRight }) => {
    return (
        <div className={`${classes.layer_container} ${layerIsOnRight ? classes.layer_is_on_right : classes.layer_is_on_left}`} onClick={() => setLayerIsOnRight(!layerIsOnRight)}>
            <div className={classes.left_text_container}>
                <h1>Welcome, Friend!</h1>
                <p>register with your personal data to start your user experience.</p>
                <button onClick={() => setLayerIsOnRight(!layerIsOnRight)}>SIGN UP</button>
            </div>
            <div className={classes.right_text_container}>
                <h1>Welcome Back!</h1>
                <p>enter your personal data to continue your user experience.</p>
                <button onClick={() => setLayerIsOnRight(!layerIsOnRight)}>SIGN IN</button>
            </div>
        </div>
    );
};

export default Layer;
