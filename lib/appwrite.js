import { Avatars, Databases, Account, Client , ID} from 'react-native-appwrite';
export const config = {
    endpoint : 'https://cloud.appwrite.io.v1',
    platform: 'com.bhakitah.artsy',
    projectId: '661fc62caf052f4ea2da',
    databaseId: '6620c92567afae69c22b',
    userCollectionId: '6620c9733d7abaf773f6',
    videoCollectionId: '6620c9b9429a0960eb46',
    storageId :'6620cb90a78621bfc44f'
}


// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password);
        const newUser = await databases.createDocument()
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password)
        return session;
    } catch (error) {
        throw new Error(error);
    }
}

