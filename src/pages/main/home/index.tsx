import Intro from "@/pages/main/home/components/intro";
import Features from "@/pages/main/home/components/features";
import Stats from "@/pages/main/home/components/stats";
import classes from "./classes.module.scss";


const Home = () => {
    return(
        <div className={classes.home_container}>
            <p className={classes.name}>Home</p>
            <Intro/>
            <Features/>
            <Stats/>
        </div>
    );
};

export default Home;
