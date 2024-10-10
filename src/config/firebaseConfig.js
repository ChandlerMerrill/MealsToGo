// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCumZ2-75Iv6-jd3OQJOgu3XzudEhouA0A",
  authDomain: "mealstogo-82f12.firebaseapp.com",
  projectId: "mealstogo-82f12",
  storageBucket: "mealstogo-82f12.appspot.com",
  messagingSenderId: "702546842034",
  appId: "1:702546842034:web:0b3e24257edaaee0a254ab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log("Firebase initialized:", auth); // Check if auth is initialized properly
