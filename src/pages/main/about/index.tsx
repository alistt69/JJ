import {useSelector} from "react-redux";
import {RootState} from "@/store";

const About = () => {

    const username = useSelector((state: RootState) => state.auth.username);

    return(
        <>
            <p>about</p>
            <a>{username}</a>
        </>
    )
}

export default About;