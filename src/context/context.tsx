import React, {createContext, useContext} from 'react';
import useJobsState from "@/hooks/jobs";

interface ContextType {
    started: boolean;
    setStarted: (p: (prev: boolean) => boolean) => void;
    isJobSeeker: boolean;
    setIsJobSeeker: (isJobSeeker: boolean) => void;
    isUploading: boolean;
    setIsUploading: (isUploading: boolean) => void;
    offersLink: string;
}

export const FunctionsContext = createContext<ContextType | undefined>(undefined);

export const FunctionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

   const [started, setStarted, isJobSeeker, setIsJobSeeker, offersLink, isUploading, setIsUploading ] = useJobsState()

    return (
        <FunctionsContext.Provider value={{
            started,
            setStarted,
            isJobSeeker,
            setIsJobSeeker,
            isUploading,
            setIsUploading,
            offersLink,
        }}>
            {children}
        </FunctionsContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFunctions = () => {
    const context = useContext(FunctionsContext);
    if (!context) {
        throw new Error("useFunctions must be used within a FunctionsProvider");
    }
    return context;
};
