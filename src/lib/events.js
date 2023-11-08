import { databases, ID } from 'lib/appwrite';
import { deleteFileById } from 'lib/storage';

const databaseId = process.env.REACT_APP_APPWRITE_EVENTS_DATABASE_ID;
const collectionId = process.env.REACT_APP_APPWRITE_EVENTS_COLLECTION_ID;

function mapDocumentToEvent(document) {
	const event = {
		$id: document.$id,
		name: document.name,
		description: document.description,
		date: document.date,
		imageFileId: document.imageFileId
	}
	return event;
}

export async function getEvents() {
	try {
		const { documents } = await databases.listDocuments(databaseId, collectionId);
		return {
			events: documents.map(mapDocumentToEvent)
		}
	} catch (error) {
		return { error: error.message };
	}
}

export async function getEventById(eventId) {
	try {
		const document = await databases.getDocument(databaseId, collectionId, eventId);
		return {
			event: mapDocumentToEvent(document)
		}
	} catch (error) {
		return { error: error.message };
	}
}

export async function createEvent(event) {
	try {
		const document = await databases.createDocument(databaseId, collectionId, ID.unique(), event);
		return {
			event: mapDocumentToEvent(document)
		}
	} catch (error) {
		return { error: error.message };
	}
}

export async function deleteEventById(eventId) {
	try {
		const { event } = await getEventById(eventId);
		if (event.imageFileId) {
			await deleteFileById(event.imageFileId);
		}
		const deleteEvent = await databases.deleteDocument(databaseId, collectionId, event.$id);
		return deleteEvent;
	} catch (error) {
		return { error: error.message };
	}
}