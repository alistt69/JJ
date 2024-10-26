import {useUserInit} from "@/hooks/init";
import FullCard from "@/components/cards/cvs/vFU";

const MyCvs = () => {

    const user = useUserInit();


    const cvs = user.cvs;


    return(
        <>
            {cvs.map((item) => (
                    <div key={item.id}>

                        <FullCard name={item.name} description={item.description} location={item.location}
                                  cvsId={item.id ? item.id : ''} profession={item.profession} salary={item.salary} key={item.id} />

                    </div>
            ))}
        </>
    )
}

export default MyCvs;
