import classes from "./classes.module.scss";


const Stats = () => {

    return(
        <div className={classes.stats}>
            <div className={classes.title}>
                Some Numbers
                <p>We're fueling your future with opportunities.</p>
            </div>
            <div className={classes.stats_container}>
                <div>
                    <span>203, 593</span>
                    <p>active users</p>
                </div>
                <div>
                    <span>245, 739</span>
                    <p>offers</p>
                </div>
                <div>
                    <span>76%</span>
                    <p>of users finds their job here</p>
                </div>
                <div>
                    <span>231</span>
                    <p>special awards</p>
                </div>
                <div>
                    <span>1306</span>
                    <p>partners</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
