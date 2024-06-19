// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz9dCP9uEs-4tYaeeNNl1cnAe5PuK_EIY",
  authDomain: "data-a3fb1.firebaseapp.com",
  projectId: "data-a3fb1",
  storageBucket: "data-a3fb1.appspot.com",
  messagingSenderId: "44560059462",
  appId: "1:44560059462:web:6840138e3bbf32316fce47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const projectAuth = getAuth(app);
