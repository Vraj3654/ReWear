// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVvb87yqSTJWjq_wj6QZ5hulMskikRRHw",
    authDomain: "rewear-b52b4.firebaseapp.com",
    projectId: "rewear-b52b4",
    storageBucket: "rewear-b52b4.firebasestorage.app",
    messagingSenderId: "722565875023",
    appId: "1:722565875023:web:b929694075826b3fdd313a",
    measurementId: "G-S3N55S8HQV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();