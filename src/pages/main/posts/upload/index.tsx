import classes from "./classes.module.scss"
import {CloseOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";
import {useUpdateApplicationsMutation} from "@/api/auth";
import {useUserInit} from "@/hooks/init";
import {useState} from "react";
import UploadCvs from "@/pages/main/posts/upload/cvs";
import UploadApplications from "@/pages/main/posts/upload/applications";

const Upload = () => {

    const navigate = useNavigate();
    const [isUploadingCvs, setIsUploadingCvs] = useState<boolean>(false)

    const [updateApplication] = useUpdateApplicationsMutation()
    const user = useUserInit();
    if (!user || !user.applications) {return null;}
    const applications = user.applications;

    return(
        <>
            <div className={classes.upload_wrap}>
                <div className={classes.heading}>
                    <div className={classes.title} onClick={() => setIsUploadingCvs(!isUploadingCvs)}>Upload new <p>{isUploadingCvs ? 'cvs' : 'application'}</p></div>
                    <CloseOutlined className={classes.close} onClick={() => navigate(-1)}/>
                </div>

                <div className={classes.upload_container}>
                    {
                        isUploadingCvs ?
                            <>
                                <UploadCvs />
                            </>
                            :
                            <>
                                <UploadApplications />
                            </>

                    }
                </div>
            </div>
        </>
    )
}

export default Upload;
