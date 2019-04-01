import firebase from "firebase";

// // Initialize Firebase
var config = {
  apiKey: "AIzaSyDb5IsWm6XmlnaDShdvXv-8Xhpdq2TKMyQ",
  authDomain: "crowd-recruit-app.firebaseapp.com",
  databaseURL: "https://crowd-recruit-app.firebaseio.com",
  projectId: "crowd-recruit-app",
  storageBucket: "crowd-recruit-app.appspot.com",
  messagingSenderId: "231652914750"
};

firebase.initializeApp(config);
const Firebase = firebase.database();

export default Firebase;
