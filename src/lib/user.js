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