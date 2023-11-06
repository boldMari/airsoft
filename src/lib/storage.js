import { storage, ID } from 'lib/appwrite';

const bucketId = process.env.REACT_APP_APPWRITE_BUCKET_IMAGES_ID;

export async function uploadImage(file) {
	const data = await storage.createFile(bucketId, ID.unique(), file);
	return data;
};

export function getImageUrl(fileId) {
	return storage.getFilePreview(bucketId, fileId);
};