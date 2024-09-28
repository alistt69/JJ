import classes from "./classes.module.scss"

const Intro = () => {

    return(
        <>
            <div className={classes.intro}>

                <div className={classes.discover}>

                    <p className={classes.title}>
                        Discover Thousands of Vacancies <br/> in Your Desired Field
                    </p>

                    <p className={classes.description}>
                        Welcome to JobaJob, your premier
                        destination for job searching and job
                        posting. Simplifying your employment
                        journey, one click at a time.
                    </p>

                </div>

                <div>

                    <p className={classes.title}>
                        Why JobaJob?
                    </p>

                    <p className={classes.description}>
                        Our platform connects thousands
                        of employers with potential candidates,
                        ensuring the best fit for both parties.
                        We offer a range of features designed to help you
                        find your ideal job quickly and efficiently.
                        Explore below to see what sets us apart.
                    </p>

                </div>

            </div>
        </>
    )
}

export default Intro;
