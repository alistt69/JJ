import { GooglePlusOutlined, TwitterOutlined, GithubOutlined, InstagramOutlined } from "@ant-design/icons";
import classes from "./classes.module.scss";


const Icons = () => {
    return(
        <div className={classes.icon_container}>
            <GooglePlusOutlined />
            <TwitterOutlined />
            <GithubOutlined />
            <InstagramOutlined />
        </div>
    );
};

export default Icons;
