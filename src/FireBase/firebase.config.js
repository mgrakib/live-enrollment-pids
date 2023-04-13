/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAE5Ukr0e4Y8-oiBwkLM4fTHc8FeMlP_Ww",
	authDomain: "live-enrol.firebaseapp.com",
	projectId: "live-enrol",
	storageBucket: "live-enrol.appspot.com",
	messagingSenderId: "378176350883",
	appId: "1:378176350883:web:22b084d80db88a50d72d16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;