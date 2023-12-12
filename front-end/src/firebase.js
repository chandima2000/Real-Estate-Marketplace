// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-32613.firebaseapp.com",
  projectId: "mern-estate-32613",
  storageBucket: "mern-estate-32613.appspot.com",
  messagingSenderId: "585684976472",
  appId: "1:585684976472:web:15d5fa0a91633445289b2d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);