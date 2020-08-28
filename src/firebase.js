import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPEVO4OmOGB1S8lSVX21scOZKAv3dDvOk",
  authDomain: "messenger-clone-d5eb5.firebaseapp.com",
  databaseURL: "https://messenger-clone-d5eb5.firebaseio.com",
  projectId: "messenger-clone-d5eb5",
  storageBucket: "messenger-clone-d5eb5.appspot.com",
  messagingSenderId: "514790637197",
  appId: "1:514790637197:web:d2afe3e212ec6367c46cc4",
  measurementId: "G-JR6RGY3LYX",
});

const db = firebase.firestore();

export default db;
