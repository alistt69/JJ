import React from "react";
import classes from "./classes.module.scss"

const FullCard: React.FC<{
    name: string,
    description: string,
    location: string,
    salary: string,
    id: string,
}> = ({ name, description, location, salary, id }) => {

    return (
        <>
            <div className={classes.cart_container}>

                <div className={classes.name}>
                    <p>{name}</p>
                </div>

                <div className={classes.location}>
                    <p className={classes.heading}>Location: </p>
                    <p className={classes.subheading}>{location}</p>
                </div>

                <div className={classes.salary}>
                    <p className={classes.heading}>Starting salary: </p>
                    <p className={classes.subheading}>{salary}</p>
                </div>

                <div className={classes.description}>
                    <p>{description}</p>
                </div>

                <div className={classes.id}>
                    <p>{id}</p>
                </div>

            </div>
        </>
    )
}

export default FullCard;