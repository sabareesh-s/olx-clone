import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB7ZdfFWRtoxNaCaN3qb6pvnMVGc_7L1_Y",
    authDomain: "olx-clone-edd91.firebaseapp.com",
    projectId: "olx-clone-edd91",
    storageBucket: "olx-clone-edd91.appspot.com",
    messagingSenderId: "737740858616",
    appId: "1:737740858616:web:e7cbae49be9537cf7d070d",
    measurementId: "G-4XGHHBJYCF"
  };

export default firebase.initializeApp(firebaseConfig)