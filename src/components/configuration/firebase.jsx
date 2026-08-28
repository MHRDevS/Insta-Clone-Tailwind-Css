// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Database } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCA9fealgMrewkS_5uDYbrqGNwxECvv1c4",
  authDomain: "login-e4050.firebaseapp.com",
  projectId: "login-e4050",
  storageBucket: "login-e4050.firebasestorage.app",
  messagingSenderId: "1056888010542",
  appId: "1:1056888010542:web:f629da56445cc433e52cbf"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();