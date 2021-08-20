import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBDzJe9QTYmxFCRXLDP8N_NlQKlRUxwewM",
    authDomain: "music-bookmark-501a8.firebaseapp.com",
    projectId: "music-bookmark-501a8",
    storageBucket: "music-bookmark-501a8.appspot.com",
    messagingSenderId: "707941370301",
    appId: "1:707941370301:web:c6f8cc4cc5713a9d72aad4",
    measurementId: "G-5YZKTJ8HXS"
};

firebase.initializeApp(firebaseConfig)

export {firebase}