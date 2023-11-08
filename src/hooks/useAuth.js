import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentSession, deleteCurrentSession, logIn } from 'lib/auth';

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
	const auth = useAuthState();
	return (
		<AuthContext.Provider value={auth}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuthState() {
	const [session, setSession] = useState();

	useEffect(() => {
		(async function run() {
			const data = await getCurrentSession();
			setSession(data.session);
		})();
	}, []);

	async function logOut() {
		await deleteCurrentSession();
		setSession(undefined);
	}

	async function logInWrapper(email, password) {
		const newSession = await logIn(email, password);
		setSession(newSession);
	}

	return {
		session, logIn: logInWrapper, logOut
	}
}

export const useAuth = () => {
	const auth = useContext(AuthContext);

	if (!auth) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return auth;
}