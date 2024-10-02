import {useUserInit} from "@/hooks/init";

const MyPosts = () => {

    const user = useUserInit();


    if (!user || !user.applications) {
        return null;
    }

    const applications = user.applications;
    console.log(user, applications, user.cvs)

    return (
        <>
            <div>
                <h2>your applications</h2>
                {applications.map((item) => (
                    <>
                        <div>

                            <p>id: {item.id}</p> <p>name: {item.name}</p>

                        </div>
                    </>
                ))}
            </div>

        </>
    )
}

export default MyPosts;