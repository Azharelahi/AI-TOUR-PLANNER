// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlNM-1ayemBgJR7thOy3o4AgyHq6ztMb4",
  authDomain: "trip-planner-83a74.firebaseapp.com",
  projectId: "trip-planner-83a74",
  storageBucket: "trip-planner-83a74.appspot.com",
  messagingSenderId: "136476182036",
  appId: "1:136476182036:web:31f507a9c149132ba0c901",
  measurementId: "G-B8JV5S8516"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)