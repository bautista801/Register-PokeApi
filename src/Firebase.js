import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBe4PWPbAOeJh9FwihIwKoAr8ZT3uqhstI",
    authDomain: "resgistro-be2af.firebaseapp.com",
    projectId: "resgistro-be2af",
    storageBucket: "resgistro-be2af.appspot.com",
    messagingSenderId: "357057298003",
    appId: "1:357057298003:web:ec568acd88715fa4c150a6"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export { auth, firebase, db, storage }