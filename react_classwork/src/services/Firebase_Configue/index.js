// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlVpscHub-SyNdyauZdpPXWFY699-uXDU",
  authDomain: "complaint-management-sys-39b40.firebaseapp.com",
  projectId: "complaint-management-sys-39b40",
  storageBucket: "complaint-management-sys-39b40.appspot.com",
  messagingSenderId: "433983019871",
  appId: "1:433983019871:web:df522f42d8beda9748f4ea",
  measurementId: "G-PV9GGLFQCK",
};

// Initialize Firebase
if (!getApps().length) initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
export {
  auth,
  google,
  facebook,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
};
