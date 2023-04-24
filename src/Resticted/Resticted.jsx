import React, { useContext } from 'react';
import { AuthcontextAPI } from '../AuthContext/AuthContext';
import Home from '../components/Home';
import { Navigate } from 'react-router-dom';

const Resticted = ({ children }) => {
    const { user } = useContext(AuthcontextAPI);
    if (!user) {
        return children;
    }
    return <Navigate to={'/home'} replace/>
};

export default Resticted;