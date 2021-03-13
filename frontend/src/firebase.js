import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvpsnlTvYWK4NmAp-OaNacNo41ZUuKQMM",
    authDomain: "movies-app-5828.firebaseapp.com",
    projectId: "movies-app-5828",
    storageBucket: "movies-app-5828.appspot.com",
    messagingSenderId: "825007569291",
    appId: "1:825007569291:web:0f708ee18492bda785d78e"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

// eslint-disable-next-line
export default firebase;