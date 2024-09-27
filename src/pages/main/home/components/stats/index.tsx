import classes from './classes.module.scss'

const Stats = () => {

    return(
        <>
            <div className={classes.stats}>

                <div className={classes.title}>
                    Some Numbers
                    <p>We're fueling your future with opportunities.</p>
                </div>

                <div className={classes.stats_container}>
                    <div>
                        <p>203, 593</p>
                        <p>active users</p>
                    </div>
                    <div>
                        <p>245, 739</p>
                        <p>offers</p>
                    </div>
                    <div>
                        <p>76%</p>
                        <p>of users finds their job here</p>
                    </div>
                    <div>
                        <p>231</p>
                        <p>special awards</p>
                    </div>
                    <div>
                        <p>1306</p>
                        <p>partners</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Stats;
