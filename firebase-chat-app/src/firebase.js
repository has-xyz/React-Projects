import firebase from 'firebase/app';
import 'firebase/auth';
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAbauAlaVLBrAFS5LNc7oQZSX7eeTGAVZs",
    authDomain: "unichat-52c52.firebaseapp.com",
    projectId: "unichat-52c52",
    storageBucket: "unichat-52c52.appspot.com",
    messagingSenderId: "296508465556",
    appId: "1:296508465556:web:f8ac6db3d7cdd835566f81"
  }).auth();