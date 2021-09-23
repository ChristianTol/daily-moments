import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBmD7CfoiUYeodn-eSfEMgX2JZUBRJ2qL4",
  authDomain: "daily-moments-71ef9.firebaseapp.com",
  projectId: "daily-moments-71ef9",
  storageBucket: "daily-moments-71ef9.appspot.com",
  messagingSenderId: "640650069079",
  appId: "1:640650069079:web:071ee1eb1c43659a6b4f12"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();