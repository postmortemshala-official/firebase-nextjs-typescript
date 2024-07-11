// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);