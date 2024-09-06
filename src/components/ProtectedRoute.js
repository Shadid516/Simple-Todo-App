// src/components/ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { validateToken } from '../api/auth'; // Import validateToken function

const ProtectedRoute = ({ children }) => {
    const [isValid, setIsValid] = useState(null); // Track token validity

    useEffect(() => {
        const checkToken = async () => {
            const valid = await validateToken();
            setIsValid(valid);
        };

        checkToken();
    }, []);

    if (isValid === null) {
        // Show loading or spinner while checking token
        return <div>Loading...</div>;
    }

    if (!isValid) {
        const redirectPath = localStorage.getItem('token') ? '/login' : '/register';
        return <Navigate to={redirectPath} />;
    }

    return children;
};

export default ProtectedRoute;
