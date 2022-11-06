// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgJO5dEg1gzbIDmZ59EguI-ZEfsmusXfg",
  authDomain: "tiktok-clone-4e643.firebaseapp.com",
  projectId: "tiktok-clone-4e643",
  storageBucket: "tiktok-clone-4e643.appspot.com",
  messagingSenderId: "601281165882",
  appId: "1:601281165882:web:7ba2971cb7a0d488461303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const auth = getAuth()
export default app