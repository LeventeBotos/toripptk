// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZXdu9Q0NnUutN12x4LHzgu1quhhw2j9o",
  authDomain: "pptk10a.firebaseapp.com",
  projectId: "pptk10a",
  storageBucket: "pptk10a.appspot.com",
  messagingSenderId: "652194871392",
  appId: "1:652194871392:web:fafe154370e45cb6712b05",
  measurementId: "G-DFP3XFVPJB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
