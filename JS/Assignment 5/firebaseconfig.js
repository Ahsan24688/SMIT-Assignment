
// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  import { collection, addDoc, getFirestore, getDocs, deleteDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBK2ZE-E32WTKoPg-C3XSKQQkTSUEgdeVY",
    authDomain: "todo-app-f415e.firebaseapp.com",
    projectId: "todo-app-f415e",
    storageBucket: "todo-app-f415e.firebasestorage.app",
    messagingSenderId: "75038652418",
    appId: "1:75038652418:web:ea666b14af3ccd6840cf1b",
    measurementId: "G-901Q74G5EN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { collection, addDoc, db, getDocs, deleteDoc, doc, setDoc };