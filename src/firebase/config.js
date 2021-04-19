import firebase from "firebase/app"
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnckFHYfOyF_DUvq9FZjfx3rC9tJxMN5Y",
  authDomain: "finalproject-7ae58.firebaseapp.com",
  projectId: "finalproject-7ae58",
  storageBucket: "finalproject-7ae58.appspot.com",
  messagingSenderId: "93673976808",
  appId: "1:93673976808:web:eb48cdd09446cfdc88ea5d",
  measurementId: "G-ZD9QL12RQB"
};

if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export {firebase}