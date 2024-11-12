import { useFunctions } from "@/context/context.tsx";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import UploadApplications from "@/pages/main/posts/upload/applications";
import UploadCvs from "@/pages/main/posts/upload/cvs";

import classes from "../upload/applications/classes.module.scss"
import React, { useState } from "react";


const Upload = () => {
    const navigate = useNavigate();
    const {isJobSeeker, setIsJobSeeker } = useFunctions()
    const [type, setType] = useState('')

    const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLSelectElement;

        if (target.value === "cvs") {
            setIsJobSeeker(false);
        } else {
            setIsJobSeeker(true);
        }
        setType(target.value);
    }

    return(
        <>
            {/*<div className={classes.upload_wrap}>
                <div className={classes.heading}>
                    <div className={classes.title} onClick={() => setIsJobSeeker(!isJobSeeker)}>
                        type: {" "}
                        <p>{isJobSeeker ? 'cvs' : 'application'}</p>
                    </div>
                    <CloseOutlined className={classes.close} onClick={() => navigate(-1)}/>
                </div>

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
            </div>*/}
            <div className={classes.form_container}>
                <select
                    id="genre"
                    name="genre"
                    className={classes.form_field}
                    value={type}
                    onChange={handleChange}
                    required
                >
                    <option value="">type</option>
                    <option value="application">application</option>
                    <option value="cvs">cv</option>
                </select>
                <label htmlFor="genre" className={classes.form_label}>type</label>
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
        </>
    )
}

export default Upload;
