import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from 'hooks/useAuth';

const PrivateRoute = () => {
	const auth = useAuth();
	if(auth.session === null) return;
	if (auth.session === undefined) return <Navigate to="/prihlasit?chyba=neprihlaseny" />;
	return <Outlet />;
};

export default PrivateRoute;