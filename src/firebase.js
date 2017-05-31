import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAfGDmuYtZHTIT8yJRn0qeKDcSP2UW-ULk",
    authDomain: "oa-loops.firebaseapp.com",
    databaseURL: "https://oa-loops.firebaseio.com",
    projectId: "oa-loops",
    storageBucket: "oa-loops.appspot.com",
    messagingSenderId: "560266492247"
};

export const firebaseApp = firebase.initializeApp(config);