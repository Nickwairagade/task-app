// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd3CnO6p0sXz7drymQvNMswDlX9NDYy10",
  authDomain: "task-app-a182f.firebaseapp.com",
  projectId: "task-app-a182f",
  storageBucket: "task-app-a182f.appspot.com",
  messagingSenderId: "519493484682",
  appId: "1:519493484682:web:964f687b123f2ec425ed73",
  measurementId: "G-T3QFYFC615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);