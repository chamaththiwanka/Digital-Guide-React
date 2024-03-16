import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyAD7ND4nsit1uJ4j3co0RLrPvNAFD5PhHM",
  
    authDomain: "react-ecom-c56c5.firebaseapp.com",
  
    databaseURL: "https://react-ecom-c56c5-default-rtdb.firebaseio.com",
  
    projectId: "react-ecom-c56c5",
  
    storageBucket: "react-ecom-c56c5.appspot.com",
  
    messagingSenderId: "1061519119980",
  
    appId: "1:1061519119980:web:871638ff8b17ef4c84ea49"
  
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
