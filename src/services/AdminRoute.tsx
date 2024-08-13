import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../services/AuthProvider.tsx';

interface AdminRouteProps {
    children: ReactNode
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" />;
    }
    if (user?.email === "ys1014@hanyang.ac.kr")
        return <>{children}</>
    
    return <Navigate to="/" />;
};

export default AdminRoute;