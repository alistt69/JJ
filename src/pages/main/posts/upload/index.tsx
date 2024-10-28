import classes from "./classes.module.scss"
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import UploadCvs from "@/pages/main/posts/upload/cvs";
import UploadApplications from "@/pages/main/posts/upload/applications";
import { useFunctions } from "@/context/context.tsx";

const Upload = () => {

    const navigate = useNavigate();

    const {isJobSeeker, setIsJobSeeker } = useFunctions()

    return(
        <>
            <div className={classes.upload_wrap}>
                <div className={classes.heading}>
                    <div className={classes.title} onClick={() => setIsJobSeeker(!isJobSeeker)}>
                        Upload new {' '}
                        <p>{isJobSeeker ? 'cvs' : 'application'}</p>
                    </div>
                    <CloseOutlined className={classes.close} onClick={() => navigate(-1)}/>
                </div>

                <div className={classes.upload_container}>
                    {
                        isJobSeeker ?
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
