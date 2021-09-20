// import * as firebase from "firebase/app";
// import firebase from "firebase";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGK0nQsTQnCKDN6yjgPs7y6sIZ_uPpOb4",
  authDomain: "fir-1be8e.firebaseapp.com",
  projectId: "fir-1be8e",
  storageBucket: "fir-1be8e.appspot.com",
  messagingSenderId: "623809172108",
  appId: "1:623809172108:web:ed2bd4455403b1220021a9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
