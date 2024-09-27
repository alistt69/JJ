import classes from "./classes.module.scss"
import { GooglePlusOutlined, TwitterOutlined, GithubOutlined, InstagramOutlined } from "@ant-design/icons"

const Icons = () => {

    return(
        <>
            <div className={classes.icon_container}>
                <div><GooglePlusOutlined /></div>
                <div><TwitterOutlined /></div>
                <div><GithubOutlined /></div>
                <div><InstagramOutlined /></div>
            </div>
        </>
    )
}

export default Icons;
