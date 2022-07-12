// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";

// Your web app's Firebase configuration
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCK4KVbYLzfSMRHxsqxFlKVkQDllAxOec4",

  authDomain: "primeiro-firebase-598c8.firebaseapp.com",

  projectId: "primeiro-firebase-598c8",

  storageBucket: "primeiro-firebase-598c8.appspot.com",

  messagingSenderId: "313236881369",

  appId: "1:313236881369:web:c46b8730399c6dda1863c8",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();
const firestore = firebase.firestore();
export { auth, firestore };
