import { teams } from 'lib/appwrite'

export async function getTeams() {
	try {
		const data = await teams.list();
		return {
			teams: data.teams
		}
	} catch (error) {
		console.error(error);
		return {
			error: 'Failed to fetch teams'
		}
	}
}