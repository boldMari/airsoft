import { storage, ID } from 'lib/appwrite';

const bucketId = process.env.REACT_APP_APPWRITE_BUCKET_IMAGES_ID;

export async function uploadImage(file) {
	try {
		const data = await storage.createFile(bucketId, ID.unique(), file);
		return data;
	} catch (error) {
		console.error('Error uploading image:', error);
		return error;
	}
};

export function getImageUrl(fileId) {
	try {
		return storage.getFilePreview(bucketId, fileId);
	} catch (error) {
		console.error('Error getting image URL:', error);
		return error;
	}
};

export async function getFile(fileId) {
	try {
		const data = await storage.getFile(bucketId, fileId);
		return data;
	} catch (error) {
		return error;
	}
};

export async function deleteFileById(fileId) {
	try {
		const data = await storage.deleteFile(bucketId, fileId);
		return data;
	} catch (error) {
		return error;
	}
}