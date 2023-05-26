// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB413PX4LppxgIBXbWTuwn_XpJ97ajO6Lw",
  authDomain: "context-todoapp.firebaseapp.com",
  projectId: "context-todoapp",
  storageBucket: "context-todoapp.appspot.com",
  messagingSenderId: "816046007978",
  appId: "1:816046007978:web:6d35c20651ed7cb6c792d3",
  measurementId: "G-XJLCMK7R4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
