// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADz0ZC7_JP8ca5jyNDK4pzihMDCYIEBko",
  authDomain: "alibabaug-2c0c9.firebaseapp.com",
  projectId: "alibabaug-2c0c9",
  storageBucket: "alibabaug-2c0c9.firebasestorage.app",
  messagingSenderId: "573393066545",
  appId: "1:573393066545:web:49dc3a7509856df41d5310",
  measurementId: "G-0WBL9H5075"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const auth = getAuth(app);
export {auth}