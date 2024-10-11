import {useUserInit} from "@/hooks/init";
import FullCard from "@/components/cards/cvs/vFU";

const Cvs = () => {

    const user = useUserInit();


    if (!user || !user.cvs) {
        return null;
    }


    const cvs = user.cvs;


    return(
        <>
            {cvs.map((item) => (
                    <div key={item.id}>

                        <FullCard name={item.name} description={item.description} location={item.location}
                                  cvsId={item.id ? item.id : ''} profession={item.profession} wantedSalary={item.wantedSalary} key={item.id} />

                    </div>
            ))}
        </>
    )
}

export default Cvs;
