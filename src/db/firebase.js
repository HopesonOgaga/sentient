// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ Add Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNtXqXUjX7E4VD5cPb-4LEn4oMIyJTG2U",
  authDomain: "senti-90844.firebaseapp.com",
  projectId: "senti-90844",
  storageBucket: "senti-90844.firebasestorage.app",
  messagingSenderId: "607841759249",
  appId: "1:607841759249:web:114794b0a2e46e7d4a81b0",
  measurementId: "G-PFTWSPD7R9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app); // ✅ Export db
