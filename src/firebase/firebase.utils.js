import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCulPosytnjFidtBqcjRNDPWXRI0R7ngLI",
  authDomain: "little-spoons-db-5ff2e.firebaseapp.com",
  projectId: "little-spoons-db-5ff2e",
  storageBucket: "little-spoons-db-5ff2e.appspot.com",
  messagingSenderId: "146790751936",
  appId: "1:146790751936:web:70f55f120c9bec4ac8d725",
  measurementId: "G-C8KHHG0CD1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;