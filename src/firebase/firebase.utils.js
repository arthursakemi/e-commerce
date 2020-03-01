import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDRBKpOlxGigEiSePaNi21-GGy0ibcjogc",
    authDomain: "e-commerce-react-ef7d6.firebaseapp.com",
    databaseURL: "https://e-commerce-react-ef7d6.firebaseio.com",
    projectId: "e-commerce-react-ef7d6",
    storageBucket: "e-commerce-react-ef7d6.appspot.com",
    messagingSenderId: "102923613304",
    appId: "1:102923613304:web:5492bf0598ffa82e93a98d",
    measurementId: "G-6X9ZM0BPDL"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;