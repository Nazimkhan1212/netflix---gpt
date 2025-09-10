// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoHW_QAH69oK2zMtDQM-0P0DZWb0n6szE",
  authDomain: "netflix-gpt-16852.firebaseapp.com",
  projectId: "netflix-gpt-16852",
  storageBucket: "netflix-gpt-16852.firebasestorage.app",
  messagingSenderId: "24650473813",
  appId: "1:24650473813:web:f38b61ffd822e5e8500fdc",
  measurementId: "G-W01ETTPWVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
