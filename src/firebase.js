import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyANt70N8jXTg5iqbxG4iZ--HlDS3lA8eYQ",
    authDomain: "eliester.firebaseapp.com",
    projectId: "eliester",
    storageBucket: "eliester.appspot.com",
    messagingSenderId: "182007132340",
    appId: "1:182007132340:web:8d9be33f08ac7bf68ca7e1"
});

export const auth = firebase.auth

export default app;