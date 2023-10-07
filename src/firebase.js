
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD7FfTHVwjxGJT7CZWRd89pB9PVh74qb0",
    authDomain: "bodhi-spa-fac9b.firebaseapp.com",
    projectId: "bodhi-spa-fac9b",
    storageBucket: "bodhi-spa-fac9b.appspot.com",
    messagingSenderId: "496136159835",
    appId: "1:496136159835:web:7e8148b34f031baa67f57e",
    measurementId: "G-1HRPSN5L72"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getFirestore(app);

  export default analytics