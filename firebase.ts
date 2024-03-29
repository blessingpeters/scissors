// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFz70SfcieStqJvF2pRujBSPVIWwBydBc",
  authDomain: "scissors-401815.firebaseapp.com",
  projectId: "scissors-401815",
  storageBucket: "scissors-401815.appspot.com",
  messagingSenderId: "607524904825",
  appId: "1:607524904825:web:cc3ab600f9db7dd9ab59a8",
  measurementId: "G-PPPF6PW025"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

if (typeof window !== 'undefined') {
  // Only initialize Firebase analytics on the client side
  const analytics = getAnalytics(app);
}

export { app, auth, db};