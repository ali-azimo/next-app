// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "comercio-moz-d35bb.firebaseapp.com",
  projectId: "comercio-moz-d35bb",
  storageBucket: "comercio-moz-d35bb.firebasestorage.app",
  messagingSenderId: "774126923730",
  appId: "1:774126923730:web:546fd6cb037b23ffae220b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);