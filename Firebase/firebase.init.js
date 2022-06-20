// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL6oasY03Ocb7HAhkmA2GhQ6-DC2RJnzk",
  authDomain: "econo-app-c73f8.firebaseapp.com",
  projectId: "econo-app-c73f8",
  storageBucket: "econo-app-c73f8.appspot.com",
  messagingSenderId: "392672750092",
  appId: "1:392672750092:web:454543ae84f738281d1c29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;