// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp, } from "firebase/app";
import { getAnalytics, } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getMessaging,isSupported } from "firebase/messaging";
import { getRemoteConfig } from "firebase/remote-config";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNog7YJGO46NYtU7H8BL0maeh99wOUsCA",
  authDomain: "nextjs-test-a5d17.firebaseapp.com",
  projectId: "nextjs-test-a5d17",
  storageBucket: "nextjs-test-a5d17.appspot.com",
  messagingSenderId: "526824253866",
  appId: "1:526824253866:web:5b94215cfeb9f74d91a3d3",
  measurementId: "G-VC1QNY0YT8"
};

let firebaseApp;

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

const initialize=async(firebaseApp:any)=>{
const bool = await isSupported()
if (bool) {
  const messaging = getMessaging(firebaseApp);
  const analytics = getAnalytics(firebaseApp);
  
}
// const remoteConfig = getRemoteConfig(firebaseApp);
}

console.log("firebaseApp", firebaseApp);

const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

initialize(firebaseApp)

export { firebaseApp, auth, db, storage };

