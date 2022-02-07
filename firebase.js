import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYNcqGtEoiLGY-v7ULrj-1ud7wYC3_u_8",
  authDomain: "wiichating.firebaseapp.com",
  projectId: "wiichating",
  storageBucket: "wiichating.appspot.com",
  messagingSenderId: "362550844243",
  appId: "1:362550844243:web:05b24dd62c8c5d2a539fa6",
};

let app;

if(firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };