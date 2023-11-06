import { storage, ID } from 'lib/appwrite';

const bucketId = process.env.REACT_APP_APPWRITE_BUCKET_IMAGES_ID;

export async function uploadImage(file) {
	try {
		const data = await storage.createFile(bucketId, ID.unique(), file);
		return data;
	} catch (error) {
		console.error('Error uploading image:', error);
		throw error;
	}
};

export function getImageUrl(fileId) {
	try {
		return storage.getFilePreview(bucketId, fileId);
	} catch (error) {
		console.error('Error getting image URL:', error);
		throw error;
	}
};