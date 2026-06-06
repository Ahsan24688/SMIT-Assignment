
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
  import { getFirestore, doc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2a3E9NEVj2YVn_LoB1tBdnB2dX9yJfUY",
    authDomain: "quiz-app-authentication-521ba.firebaseapp.com",
    projectId: "quiz-app-authentication-521ba",
    storageBucket: "quiz-app-authentication-521ba.firebasestorage.app",
    messagingSenderId: "974759690444",
    appId: "1:974759690444:web:395b7510796b0a3b820269",
    measurementId: "G-2RRFKM1T7M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, createUserWithEmailAndPassword, db, doc };
