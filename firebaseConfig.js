// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2GYsA5pOm8_ctDXKeHSMomCkqgnOBioo",
    authDomain: "makeupappminea.firebaseapp.com",
    projectId: "makeupappminea",
    storageBucket: "makeupappminea.appspot.com",
    messagingSenderId: "635822456154",
    appId: "1:635822456154:web:17a17cc8dce9195d3d0763",
    measurementId: "G-FG21GMF4D6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);