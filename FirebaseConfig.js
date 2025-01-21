// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgnmO3WR2Wwm_BgrX6WjX3UgR2lXuiz48",
  authDomain: "to-do-list-d3f76.firebaseapp.com",
  projectId: "to-do-list-d3f76",
  storageBucket: "to-do-list-d3f76.firebasestorage.app",
  messagingSenderId: "292284862618",
  appId: "1:292284862618:web:40d5a1f7a4d945b1c48f23",
  measurementId: "G-KXN2EZ16W6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);