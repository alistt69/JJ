import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux";
import {RootState} from "@/store";
import React, {ReactNode, useEffect} from "react";

const ProtectedRoute: React.FC<{ children: ReactNode}> = ({ children }) => {

    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        if (user.username === '') {
            navigate('/')
        }
    }, [user, navigate]);

    return children;
};

export default ProtectedRoute;