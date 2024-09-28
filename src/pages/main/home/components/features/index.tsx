import classes from './classes.module.scss'
import {BarsOutlined, CloudOutlined, PartitionOutlined} from "@ant-design/icons";

const Features = () => {


    return(
        <>
            <div className={classes.features}>
                <div className={classes.features_intro}>

                    <p className={classes.title}>
                        Our Key Features
                    </p>

                    <p className={classes.description}>
                        Discover the unique features which
                        make JobaJob your go-to platform for
                        job searching and posting.
                    </p>

                </div>

                <div className={classes.features_container}>

                    <div>
                        <BarsOutlined/>

                        <p>Easy Navigation</p>

                        <p>
                            Our user-friendly interface ensures that
                            both job seekers and employers can easily
                            navigate through the myriad options available.
                            Effortlessly search, apply, and post vacancies.
                        </p>
                    </div>

                    <div>
                        <PartitionOutlined/>

                        <p>Advanced Filters</p>

                        <p>
                            Utilize our advanced search filters to find
                            job listings that perfectly match your skills,
                            location, and preferences. Employers can also
                            filter candidates to find the ideal match.
                        </p>
                    </div>

                    <div>
                        <CloudOutlined/>

                        <p>Secure Platform</p>

                        <p>
                            We prioritize your security. Our platform
                            employs the latest security measures to protect
                            your data, ensuring a safe and reliable experience
                            for all users.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Features;
