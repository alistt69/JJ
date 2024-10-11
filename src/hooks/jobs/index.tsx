import { useState, useEffect } from 'react';
import {paths} from "@/routes/routes.ts";

const useJobsState = () => {

    const [started, setStarted] = useState(() => {
        const saved = localStorage.getItem('started');
        return saved === 'true';
    });

    const [isJobSeeker, setIsJobSeeker] = useState<boolean>(() => {
        const saved = localStorage.getItem('isJobSeeker');
        return saved === 'true';
    });

    const [offersLink, setOffersLink] = useState<string>(paths.JOBS)

    useEffect(() => {
        localStorage.setItem('started', JSON.stringify(started));
    }, [started]);

    useEffect(() => {
        localStorage.setItem('isJobSeeker', JSON.stringify(isJobSeeker));
        const newOffersLink = isJobSeeker ? paths.APPLICATIONS : paths.CVS;
        setOffersLink(newOffersLink);
        console.log(isJobSeeker, newOffersLink);
    }, [isJobSeeker]);

    return [started, setStarted, isJobSeeker, setIsJobSeeker, offersLink] as const;
};

export default useJobsState;
