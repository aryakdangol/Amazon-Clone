import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyADjoP661u31piDt4lOg1ZKgzrSlhpbj1s",
    authDomain: "clone-ecca6.firebaseapp.com",
    projectId: "clone-ecca6",
    storageBucket: "clone-ecca6.appspot.com",
    messagingSenderId: "1052683425976",
    appId: "1:1052683425976:web:4f9b54f31308d77d52bc4d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};



