import { Client, Databases, ID, Storage } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);
export const storage = new Storage(client);
export { ID };

client
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID)