
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAS_-vKguBKxTVKOqY2_IeXjFAKNO27Mkg",
    authDomain: "wooshowtest-314409.firebaseapp.com",
    projectId: "wooshowtest-314409",
    storageBucket: "wooshowtest-314409.appspot.com",
    messagingSenderId: "110565696787",
    appId: "1:110565696787:web:b5d73105909983145626e6"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export { db }
