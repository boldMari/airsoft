import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from 'hooks/useAuth';

const PrivateRoute = () => {
	const auth = useAuth();
	if (!auth.session) return <Navigate to="/prihlasit?chyba=neprihlaseny" />;
	return <Outlet />;
};

export default PrivateRoute;