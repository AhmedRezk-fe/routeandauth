import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAhc2FOBwU_A89DCwiZ0Ni_Up0gFIJSIMs",
    authDomain: "devicetoken-6b09d.firebaseapp.com",
    projectId: "devicetoken-6b09d",
    storageBucket: "devicetoken-6b09d.appspot.com",
    messagingSenderId: "245035379805",
    appId: "1:245035379805:web:955acac83eb65a2fa9b1b4",
    measurementId: "G-RFL0R940K7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;