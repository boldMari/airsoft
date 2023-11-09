import { createContext, useContext, useState, useEffect } from 'react';
import { AppwriteException } from 'appwrite';
import { getCurrentSession, deleteCurrentSession, logIn } from 'lib/auth';
import { getTeams } from 'lib/user';

const teamAdminId = process.env.REACT_APP_TEAM_ADMIN_ID;

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
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		(async function run() {
			const data = await getCurrentSession();
			setSession(data.session);
		})();
	}, []);

	useEffect(() => {
		(async function run() {
			if (!session?.$id) return;
			const { teams } = await getTeams();
			const isAdmin = !!teams.find(team => team.$id === teamAdminId);
			setIsAdmin(isAdmin);
		})();
	}, [session?.$id]);

	async function logOut() {
		await deleteCurrentSession();
		setSession(undefined);
	}

	async function logInWrapper(email, password) {
		try {
			const newSession = await logIn(email, password);
			if ( newSession instanceof AppwriteException ) {
				return newSession;
			}
			setSession(newSession);
		} catch (error) {
			return error;
		}
	}

	return {
		session, isAdmin, logIn: logInWrapper, logOut
	}
}

export const useAuth = () => {
	const auth = useContext(AuthContext);

	if (!auth) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return auth;
}