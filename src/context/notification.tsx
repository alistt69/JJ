import React, { createContext, ReactNode, useContext } from 'react';
import { notification } from 'antd';

interface NotificationContextType {
    notify: (icon: React.ReactNode, message: string, description: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [api, contextHolder] = notification.useNotification();

    const notify = (icon: React.ReactNode, message: string, description: string) => {
        api.open({
            message,
            description,
            icon,
            showProgress: true,
            pauseOnHover: true,
        });
    };

    return (
        <NotificationContext.Provider value={{ notify }}>
            {contextHolder}
            {children}
        </NotificationContext.Provider>
    );
};


export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};