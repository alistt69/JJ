import React from "react";

const ShortCard: React.FC<{
    name: string,
    location: string,
    salary: string,
    id: string,
}> = ({ name, location, salary, id, from }) => {

    return (
        <>
            {name}
        </>
    )
}

export default ShortCard;