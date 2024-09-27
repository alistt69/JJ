import React, {createContext, useContext, useEffect, useState} from 'react';
import {paths} from "@/routes/routes.ts";

interface ContextType {
    started: boolean;
    setStarted: (p: (prev: boolean) => boolean) => void;
    isJobSeeker: boolean;
    setIsJobSeeker: (isJobSeeker: boolean) => void;
    offersLink: string;
}

const FunctionsContext = createContext<ContextType | undefined>(undefined);

export const FunctionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [started, setStarted] = useState(() => {
        const saved = localStorage.getItem('started');
        return saved === 'true';
    });

    const [isJobSeeker, setIsJobSeeker] = useState(() => {
        const saved = localStorage.getItem('isJobSeeker');
        return saved === 'true';
    });

    const [offersLink, setOffersLink] = useState<string>(paths.JOBS)

    useEffect(() => {
        localStorage.setItem('started', JSON.stringify(started));
        isJobSeeker ? setOffersLink(`${paths.JOBS}/${paths.VACANCIES}`) : setOffersLink(`${paths.JOBS}/${paths.EMPLOYEES}`)

    }, [started]);

    useEffect(() => {
        localStorage.setItem('isJobSeeker', JSON.stringify(isJobSeeker));
        isJobSeeker ? setOffersLink(`${paths.JOBS}/${paths.VACANCIES}`) : setOffersLink(`${paths.JOBS}/${paths.EMPLOYEES}`)

    }, [isJobSeeker]);

    return (
        <FunctionsContext.Provider value={{
            started,
            setStarted,
            isJobSeeker,
            setIsJobSeeker,
            offersLink,
        }}>
            {children}
        </FunctionsContext.Provider>
    );
}

export const useFunctions = () => {
    const context = useContext(FunctionsContext);
    if (!context) {
        throw new Error;
    }

    return context;
};

