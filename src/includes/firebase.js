import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDJIDwNvJfqLtbbUV5I4qRhwsvO8WsI1rs",
    authDomain: "music-fb12f.firebaseapp.com",
    projectId: "music-fb12f",
    storageBucket: "music-fb12f.appspot.com",
    appId: "1:46594161394:web:6a500da2088e0fcafa2e6b"
  };

 firebase.initializeApp(firebaseConfig);




 const auth  = firebase.auth();
 const db = firebase.firestore();

 const userCollection = db.collection('users')
 export{ auth, db , userCollection} ;