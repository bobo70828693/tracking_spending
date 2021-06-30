import firebase from 'firebase'

var firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'wooshowtest-314409.firebaseapp.com',
    projectId: 'wooshowtest-314409',
    storageBucket: 'wooshowtest-314409.appspot.com',
    messagingSenderId: '110565696787',
    appId: '1:110565696787:web:b5d73105909983145626e6',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
