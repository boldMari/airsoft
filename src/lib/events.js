import { databases, ID } from './appwrite';

const databaseId = process.env.REACT_APP_APPWRITE_EVENTS_DATABASE_ID;
const collectionId = process.env.REACT_APP_APPWRITE_EVENTS_COLLECTION_ID;

function mapDocumentToEvent(document) {
	const event = {
		$id: document.$id,
		name: document.name,
		description: document.description,
		date: document.date,
	}
	return event;
}

export async function getEvents() {
	const { documents } = await databases.listDocuments(databaseId, collectionId);
	return {
		events: documents.map(mapDocumentToEvent)
	}
}

export async function getEventById(eventId) {
	const document = await databases.getDocument(databaseId, collectionId, eventId);
	return {
		event: mapDocumentToEvent(document)
	}
}

export async function createEvent(event) {
	const document = await databases.createDocument(databaseId, collectionId, ID.unique(), event);
	return {
		event: mapDocumentToEvent(document)
	}
}