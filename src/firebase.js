// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2JrmI_bi0mEWD0s_1dON6WbQXZKDhPvo",
  authDomain: "dam-story-react-vite-web-app.firebaseapp.com",
  projectId: "dam-story-react-vite-web-app",
  storageBucket: "dam-story-react-vite-web-app.firebasestorage.app",
  messagingSenderId: "927071312087",
  appId: "1:927071312087:web:d497dd43085979a586b892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the auth object
export const auth = getAuth(app);

