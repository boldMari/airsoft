import { account } from 'lib/appwrite';

export async function logIn(email, password) {
	try {
		const session = await account.createEmailSession(email, password);
		return session;
	} catch (error) {
		return { error: error.message };
	}
}

export async function getCurrentSession() {
	try {
		const session = await account.getSession('current');
		return { session };
	} catch (error) {
		return { error: error.message };
	}
}

export async function logOut() {
	try {
		await account.deleteSession('current');
		return {};
	} catch (error) {
		return { error: error.message };
	}
}