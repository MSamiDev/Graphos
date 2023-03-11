// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKibUG-ztD2Tr1ALD8lddRgbbmzVjpjSw",
  authDomain: "graphos-22517.firebaseapp.com",
  projectId: "graphos-22517",
  storageBucket: "graphos-22517.appspot.com",
  messagingSenderId: "713175095045",
  appId: "1:713175095045:web:e50830ab5117c84a80c96c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export default app;
export { auth, db };
