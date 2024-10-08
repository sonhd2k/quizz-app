// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAsNUc363ExAxNV4epeS5M5QRgkPd1JXOs",
  authDomain: "quiz-app-715e8.firebaseapp.com",
  databaseURL: "https://quiz-app-715e8-default-rtdb.firebaseio.com",
  projectId: "quiz-app-715e8",
  storageBucket: "quiz-app-715e8.appspot.com",
  messagingSenderId: "416219838734",
  appId: "1:416219838734:web:c77c98b573dda1070cff5f",
  measurementId: "G-Z97D3J5PV4"
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);