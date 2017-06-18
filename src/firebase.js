import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB0yA3XjsMeLq5sNGJKvJFbIZ0z3IWeTyY",
    authDomain: "oa-loops-e3067.firebaseapp.com",
    databaseURL: "https://oa-loops-e3067.firebaseio.com",
    projectId: "oa-loops-e3067",
    storageBucket: "oa-loops-e3067.appspot.com",
    messagingSenderId: "894635873660"
};

export const firebaseApp = firebase.initializeApp(config);
// export const nivelRef = firebase.database().ref('nivels');
export const nivelStatsRef = firebase.database().ref('nivelsStats');