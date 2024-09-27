import classes from "./classes.module.scss"
import {useState} from "react";

const Layer = () => {

    const [left, setLeft] = useState<boolean>(false)

    return(
        <div className={`${classes.layer_container} ${left ? classes.left : ''}`}>
            <p>Welcome</p>
            <p></p>
            <button onClick={() => setLeft(!left)}>SIGN </button>
        </div>
    )
}

export default Layer;