// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4cd2a.firebaseapp.com",
  projectId: "mern-estate-4cd2a",
  storageBucket: "mern-estate-4cd2a.appspot.com",
  messagingSenderId: "520562163513",
  appId: "1:520562163513:web:44f7205dd8192c87c832e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);