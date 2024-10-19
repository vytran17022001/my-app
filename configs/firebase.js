// config/firebase.ts
import { initializeApp } from "firebase/app";
// import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2MZzF8MTJcTRp5GTObteCLlqvdUSLgeU",
  authDomain: "finalproject-9286d.firebaseapp.com",
  projectId: "finalproject-9286d",
  storageBucket: "finalproject-9286d.appspot.com",
  messagingSenderId: "81424004388",
  appId: "1:81424004388:web:a955c8459933868d75efb1",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
