import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXpQy3YJU2_-WIowUcXyb6T-sSj3yL3hw",
  authDomain: "wonder-chat-e3088.firebaseapp.com",
  projectId: "wonder-chat-e3088",
  storageBucket: "wonder-chat-e3088.appspot.com",
  messagingSenderId: "886161862987",
  appId: "1:886161862987:web:fdb8600018b75391ccb8ce",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
