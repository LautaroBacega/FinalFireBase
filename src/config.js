// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3GyLgV0lpHerPP36u_PCqzYc37a3dIhs",
  authDomain: "melatini-turismo.firebaseapp.com",
  projectId: "melatini-turismo",
  storageBucket: "melatini-turismo.appspot.com",
  messagingSenderId: "662301813235",
  appId: "1:662301813235:web:52ff92618a25ef12f7ca86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 