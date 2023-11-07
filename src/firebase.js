// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcspp9mbBrbrW_GwoReIxqEqowGlYCw2g",
  authDomain: "bodhi-spa-be89c.firebaseapp.com",
  projectId: "bodhi-spa-be89c",
  storageBucket: "bodhi-spa-be89c.appspot.com",
  messagingSenderId: "620032922061",
  appId: "1:620032922061:web:595e88592332e671a87484",
  measurementId: "G-DXHTP7YF6M",
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
