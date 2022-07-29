import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_FIREBASE_APP_ID, 
});

export const auth = app.auth()
export default app;

//this is a configuration file for firebase setup and need to follow as it is given syntax , .env.local is also a configuration file
//if we want to deploy this project on other firebase , we only need to change the values only 

