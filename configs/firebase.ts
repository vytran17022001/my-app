// config/firebase.ts
// import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Định nghĩa kiểu cho cấu hình Firebase
interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

// Cấu hình Firebase
const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyC2MZzF8MTJcTRp5GTObteCLlqvdUSLgeU",
  authDomain: "finalproject-9286d.firebaseapp.com",
  projectId: "finalproject-9286d",
  storageBucket: "finalproject-9286d.appspot.com",
  messagingSenderId: "81424004388",
  appId: "1:81424004388:web:a955c8459933868d75efb1",
};

// Khởi tạo Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const db = getFirestore(FIREBASE_APP);

// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
