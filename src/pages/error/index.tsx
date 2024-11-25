import classes from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { paths } from "@/routes/routes.ts";

const ErrorPage = () => {

    return(
        <div className={classes.error}>
            <div className={classes.error_container}>
                <div className={classes.number}>404</div>
                <div className={classes.description}>
                    <div className={classes.heading}>
                        Page not found
                    </div>
                    <div className={classes.subheading}>
                        <p className={classes.reasons}>Something went wrong: </p>

                        <div>
                            <p>&middot;</p>
                            <p>
                                we have deprecated HTTP and don't provide <br/>
                                automatic redirects to HTTPS because it is unsafe
                            </p>
                        </div>

                        <div>
                            <p>&middot;</p>
                            <p>
                                the page you're looking for doesn't exist or was deleted
                            </p>
                        </div>

                        <div>Please check the URL and try again.</div>

                    </div>
                    <NavLink to={`${paths.MAIN}/${paths.HOME}`}>Home</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;
