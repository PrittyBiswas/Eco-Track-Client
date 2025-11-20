// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzuOeeC10ARTti-2yFo6TeF5I9WP1nDlo",
  authDomain: "eco-tracker-7e283.firebaseapp.com",
  projectId: "eco-tracker-7e283",
  storageBucket: "eco-tracker-7e283.firebasestorage.app",
  messagingSenderId: "715749051094",
  appId: "1:715749051094:web:8a08712a4a592bba7f5777"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);