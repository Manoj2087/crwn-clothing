import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAxTQQWpDBj_p9OHqum_ebLXc_RPZ5SWXg",
    authDomain: "crwn-db-44e6f.firebaseapp.com",
    projectId: "crwn-db-44e6f",
    storageBucket: "crwn-db-44e6f.appspot.com",
    messagingSenderId: "892040003451",
    appId: "1:892040003451:web:2b4e4156b6fa0a6b6547de",
    measurementId: "G-T14KTXQYS2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;