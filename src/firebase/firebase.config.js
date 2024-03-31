// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSkQzwbquhxDy1DAxQgAyjRVPYjOMn2zQ",
  authDomain: "auth-add.firebaseapp.com",
  projectId: "auth-add",
  storageBucket: "auth-add.appspot.com",
  messagingSenderId: "405594605437",
  appId: "1:405594605437:web:a689655c08d764a4a62e14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;