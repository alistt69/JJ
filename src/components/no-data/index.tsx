import nodata_image from "@/images/nodata/nodata.png";
import classes from "./classes.module.scss"

const NoData = () => {

    return(
        <>
            <div className={classes.container}>
                <img className={classes.image} src={nodata_image} alt={""}/>
                <p className={classes.text}>no data here : (</p>
            </div>
        </>
    )
}

export default NoData;
