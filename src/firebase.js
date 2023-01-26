import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAKKBr8R-74U8huYzi6yWf47aFGRbv7NrI",
  authDomain: "chat2-78ea3.firebaseapp.com",
  projectId: "chat2-78ea3",
  storageBucket: "chat2-78ea3.appspot.com",
  messagingSenderId: "397968003027",
  appId: "1:397968003027:web:57de02e21e79b1e28ee926",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
