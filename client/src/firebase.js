// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa3uM4763AntuvGBwtxID7I9wz5PRKAfs",
  authDomain: "mern-blog-603df.firebaseapp.com",
  projectId: "mern-blog-603df",
  storageBucket: "mern-blog-603df.appspot.com",
  messagingSenderId: "994703942755",
  appId: "1:994703942755:web:a379bbf9a7a3dc83484456",
  measurementId: "G-M71WZTT1GN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);