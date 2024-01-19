import { createContext, useContext, useState, useEffect } from 'react';
import { AppwriteException } from 'appwrite';
import { getCurrentSession, deleteCurrentSession, logIn } from 'lib/auth';
import { getTeams, fetchUserDetails, updatePreferences } from 'lib/user';

const teamAdminId = process.env.REACT_APP_APPWRITE_TEAM_ADMIN_ID;

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
	const [session, setSession] = useState(null);
	const [isAdmin, setIsAdmin] = useState(false);
	const [userDetails, setUserDetails] = useState({ name: '', prefs: {nickname: '', team: ''} });

	useEffect(() => {
		(async function run() {
			const data = await getCurrentSession();
			setSession(data.session);
		})();
	}, []);

	useEffect(() => {
		const fetchTeams = async () => {
			if (!session?.$id) return;
			const { teams } = await getTeams();
			const isAdmin = !!teams.find((team) => team.$id === teamAdminId);
			setIsAdmin(isAdmin);
		};

		const fetchUser = async () => {
			if (!session?.$id) return;
			const { user } = await fetchUserDetails();
			setUserDetails(user);
		};

		(async function run() {
			await fetchTeams();
			await fetchUser();
		})();
	}, [session?.$id]);

	async function updateUserDetails(preferences) {
		const { user } = await updatePreferences(preferences);
		setUserDetails(user);
	}

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
		session, isAdmin, userDetails, updateUserDetails, logIn: logInWrapper, logOut
	}
}

export const useAuth = () => {
	const auth = useContext(AuthContext);

	if (!auth) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return auth;
}