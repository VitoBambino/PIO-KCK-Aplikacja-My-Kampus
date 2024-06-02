// Import the Firebase modules that needed
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqRvAFeKtRZQYCg1J_8AwM5kk61xlbWA0",
    authDomain: "my-kampus-6f73d.firebaseapp.com",
    projectId: "my-kampus-6f73d",
    storageBucket: "my-kampus-6f73d.appspot.com",
    messagingSenderId: "879223836191",
    appId: "1:879223836191:web:468f621034b6d3c9c00f2a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
