// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // You need to import getAuth here
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyDlMD1c3GtTgf5_h6fqrH-MYD3NwlxO0WM",
    // authDomain: "fir-62202.firebaseapp.com",
    // projectId: "fir-62202",
    // storageBucket: "fir-62202.firebasestorage.app",
    // messagingSenderId: "333485336284",
    // appId: "1:333485336284:web:3219ff6f29c1f82e39b619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };