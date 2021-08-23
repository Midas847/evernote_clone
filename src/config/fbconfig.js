import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA1UX_UwDeuguUTUw8HwemyrSdHc_4eQ0I",
    authDomain: "evernote-clone-d6794.firebaseapp.com",
    projectId: "evernote-clone-d6794",
    storageBucket: "evernote-clone-d6794.appspot.com",
    messagingSenderId: "141581374441",
    appId: "1:141581374441:web:b20871d4221591d81d3178"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;