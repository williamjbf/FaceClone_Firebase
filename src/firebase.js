import firebase from "firebase"

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDE9gxZaqOJSQQptd6ODOSyAviegJtVh84",
    authDomain: "facebookclone-dcf55.firebaseapp.com",
    databaseURL: "https://facebookclone-dcf55.firebaseio.com",
    projectId: "facebookclone-dcf55",
    storageBucket: "facebookclone-dcf55.appspot.com",
    messagingSenderId: "1069042615739",
    appId: "1:1069042615739:web:b682d35adb269f4fc6309e",
    measurementId: "G-1ZGX0N0D2K"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };