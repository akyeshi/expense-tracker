// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUGCsvRKA7G-BkMwfyEnZiegVf5WS4uX8",
  authDomain: "expense-tracker-3015c.firebaseapp.com",
  projectId: "expense-tracker-3015c",
  storageBucket: "expense-tracker-3015c.appspot.com",
  messagingSenderId: "115036894870",
  appId: "1:115036894870:web:ec7abd5116586a6bf374b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 