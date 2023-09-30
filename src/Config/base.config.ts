import { FirebaseOptions } from "firebase/app";

class BaseConfig {
    private static instance = new BaseConfig();
    private constructor() { };

    private FIREBASE_CONFIG: FirebaseOptions = {
        apiKey: process.env.API_KEY || "AIzaSyChpPpVh77Pc321gw9rcX-b8cKZqZ3BVr4",
        authDomain: process.env.AUTH_DOMAIN || "react-http-101da.firebaseapp.com",
        databaseURL: process.env.DATABASE_URL || "https://react-http-101da-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: process.env.PROJECT_ID || "react-http-101da",
        storageBucket: process.env.STORAGE_BUCKET || "react-http-101da.appspot.com",
        messagingSenderId: process.env.MESSAGING_SERVICE_ID || "504381010442",
        appId: process.env.APP_ID || "1:504381010442:web:cca6e7f910040d64cce5f3"
    }

    public static getInstance() {
        return this.instance;
    }

    public get firebaseConfig() {
        return this.FIREBASE_CONFIG;
    }
}


export default BaseConfig.getInstance();