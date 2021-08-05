import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {

    apiKey: "AIzaSyDKB2fgY_bfhea76kqyVkUIT9BE8-C78CY",

    authDomain: "mundo-otaku-reactjs.firebaseapp.com",

    projectId: "mundo-otaku-reactjs",

    storageBucket: "mundo-otaku-reactjs.appspot.com",

    messagingSenderId: "108788783997",

    appId: "1:108788783997:web:3297f76363168c710bca14"

};
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase(){
    return app;
}
export const database = firebase.firestore();