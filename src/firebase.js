// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyARzNvGb0KbO7CqjrdpUaUOikKc0x0UdCs",
  authDomain: "slack-clone-b390f.firebaseapp.com",
  databaseURL: "https://slack-clone-b390f.firebaseio.com",
  projectId: "slack-clone-b390f",
  storageBucket: "slack-clone-b390f.appspot.com",
  messagingSenderId: "913887908040",
  appId: "1:913887908040:web:1403264d453637d53dd5fd",
  measurementId: "G-JKVBMB9C5C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;