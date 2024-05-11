// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-app-22789.firebaseapp.com",
  projectId: "blog-app-22789",
  storageBucket: "blog-app-22789.appspot.com",
  messagingSenderId: "852592085521",
  appId: "1:852592085521:web:7a7961f9f3d7ece6abbfb0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
