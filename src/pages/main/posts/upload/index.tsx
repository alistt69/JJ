import { useFunctions } from "@/context/context.tsx";

import UploadApplications from "@/pages/main/posts/upload/applications";
import UploadCvs from "@/pages/main/posts/upload/cvs";

import classes from "../upload/styles/classes.module.scss"
import React, { useState } from "react";


const Upload = () => {
    const {isJobSeeker, setIsJobSeeker } = useFunctions()
    const [formType, setFormType] = useState('')


    const handleFormTypeChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const target = e.target as HTMLSelectElement;

        if (target.value === "cvs") {
            setIsJobSeeker(true);
        } else {
            setIsJobSeeker(false);
        }

        setFormType(target.value);
    }

    return(
        <div>
            <div className={`${classes.form_container} ${classes.type}`}>
                <select
                    id="type"
                    name="type"
                    className={classes.form_field}
                    value={formType}
                    onChange={handleFormTypeChange}
                    required
                >
                    {isJobSeeker ?
                        <>
                            <option value="cvs">cv</option>
                            <option value="application">application</option>
                        </> :
                        <>
                            <option value="application">application</option>
                            <option value="cvs">cv</option>
                        </>
                    }
                </select>
                <label htmlFor="type" className={classes.form_label}>type</label>
            </div>
            {isJobSeeker ?
                <UploadCvs /> :
                <UploadApplications />
            }
        </div>
    )
}

export default Upload;
