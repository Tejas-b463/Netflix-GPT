// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASAYxv2EAInkgkuBl4D84Mm8a-i3aM3aQ",
    authDomain: "netflixgpt-6c91f.firebaseapp.com",
    databaseURL: "https://netflixgpt-6c91f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "netflixgpt-6c91f",
    storageBucket: "netflixgpt-6c91f.appspot.com",
    messagingSenderId: "814737909752",
    appId: "1:814737909752:web:7c7d31a6cb0c5aa381980d",
    measurementId: "G-9N204SRQM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);