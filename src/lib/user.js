import { teams, account } from 'lib/appwrite'

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