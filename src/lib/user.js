import { teams, account, ID } from 'lib/appwrite'

export async function getTeams() {
	try {
		const data = await teams.list();
		return {
			teams: data.teams
		}
	} catch (error) {
		return error;
	}
}

export async function fetchUserDetails() {
	try {
		const data = await account.get();
		console.log('fetchUserDetails', data);
		return {
			user: {
				name: data.name,
				email: data.email,
				verified: data.emailVerification,
				prefs: data.prefs
			}
		};
	} catch (error) {
		return error;
	}
};

export async function createUser(email, password, name, url) {
	try {
		const data = await account.create(ID.unique(), email, password, name);
		await account.createEmailSession(email, password);
		await account.createVerification(url);
		return {
			data
		};
	} catch (error) {
		return error;
	}
};

export async function triggerVerifyEmail(url) {
	try {
		const data = await account.createVerification(url);
		return {
			data
		};
	} catch (error) {
		return error;
	}

}

export async function verifyEmail(userId, secret) {
	try {
		const data = await account.updateVerification(userId, secret);
		return {
			data
		};
	} catch (error) {
		return error;
	}
}

export async function updateName(name) {
	try {
		const data = await account.updateName(name);
		return {
			user: {
				name: data.name,
				prefs: data.prefs
			}
		};
	} catch (error) {
		return error;
	}
}

export async function updatePreferences(preferences) {
	try {
		const data = await account.updatePrefs(preferences);
		return {
			user: {
				name: data.name,
				prefs: data.prefs
			}
		};
	} catch (error) {
		return error;
	}
}

export async function updatePassword(newPassword, oldPassword) {
	try {
		const data = await account.updatePassword(newPassword, oldPassword);
		return data;
	} catch (error) {
		return error;
	}
}

export async function resetPassword(email, url) {
	try {
		const data = await account.createRecovery(email, url);
		return data;
	} catch (error) {
		return error;
	}
}

export async function recoverPassword(userId, secret, password, confirmPassword) {
	try {
		const data = await account.updateRecovery(userId, secret, password, confirmPassword);
		return data;
	} catch (error) {
		return error;
	}
}