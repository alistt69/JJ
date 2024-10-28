import { useNavigate } from 'react-router-dom';
import {RootState} from "@/store";
import React, {ReactNode, useEffect} from "react";
import { useAppSelector } from "@/store/hooks";

const ProtectedRoute: React.FC<{ children: ReactNode}> = ({ children }) => {

    const navigate = useNavigate();
    const user = useAppSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        if (user.username === '') {
            navigate('/')
        }
    }, [user, navigate]);

    return children;
};

export default ProtectedRoute;