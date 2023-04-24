import React, { useContext } from 'react';
import { AuthcontextAPI } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { user, loading } = useContext(AuthcontextAPI);

    if (loading) {
        return <p>Page is loading...</p>
    }
		if (user) {
			return children;
		}
	return (
		<Navigate
			to={"/"}
			state={{ from: location }}
			replace
		/>
	);
};

export default PrivateRoute;