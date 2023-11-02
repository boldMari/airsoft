import { Client, Databases, ID } from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);
export { ID };

client
  .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID)