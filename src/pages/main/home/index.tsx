import classes from './classes.module.scss'
import Intro from "@/pages/main/home/components/intro";
import Features from "@/pages/main/home/components/features";
import Stats from "@/pages/main/home/components/stats";


const Home = () => {

    return(
        <>
            <div className={classes.home_container}>
                <Intro />
                <Features />
                <Stats />
            </div>
        </>
    )
}

export default Home;