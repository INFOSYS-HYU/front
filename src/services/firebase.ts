import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDur0kptNs3_i1d5S63GdrkDrLLgA1twVg",
  authDomain: "infosys-hyu-32921.firebaseapp.com",
  projectId: "infosys-hyu-32921",
  storageBucket: "infosys-hyu-32921.appspot.com",
  messagingSenderId: "1087706825918",
  appId: "1:1087706825918:web:72f0c8e00a1bce363ecaef",
  measurementId: "G-M9TYGR5CE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
