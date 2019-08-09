import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHga1nEhGIYah_KVCCy33-jIZAWXFEbuQ",
    authDomain: "react-todo-d75a3.firebaseapp.com",
    databaseURL: "https://react-todo-d75a3.firebaseio.com",
    projectId: "react-todo-d75a3",
    storageBucket: "",
    messagingSenderId: "536674971008",
    appId: "1:536674971008:web:21d41d00f3f7d8a0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();