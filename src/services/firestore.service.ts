import { initializeApp, FirebaseOptions, FirebaseApp } from "firebase/app";
import { collection, CollectionReference, Firestore, getFirestore } from "firebase/firestore";
import Config from "../Config/base.config";


export class FireStoreService {
    private static instance = new FireStoreService(Config.firebaseConfig);
    public static getInstance() {
        return this.instance;
    }

    private firbaseApp: FirebaseApp;

    private fireStore: Firestore;

    private constructor(firebaseConfig: FirebaseOptions) {
        this.firbaseApp = initializeApp(firebaseConfig);
        this.fireStore = getFirestore(this.firbaseApp);
    }

    public getCollection(collectionName: string) : CollectionReference {
        return collection(this.fireStore, collectionName);
    }
}


export default FireStoreService.getInstance();