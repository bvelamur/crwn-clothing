import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCHK13Sl-LYr1mupLbsfv8JnMP1Lv49bNw",
    authDomain: "crwn-db-15431.firebaseapp.com",
    databaseURL: "https://crwn-db-15431.firebaseio.com",
    projectId: "crwn-db-15431",
    storageBucket: "crwn-db-15431.appspot.com",
    messagingSenderId: "1015795276177",
    appId: "1:1015795276177:web:2f4ceb4c331cb1b8d2e230",
    measurementId: "G-VRNVP7X0WD"
};

// When user logs out, we get a null from the function
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    // Query inside firestore for the document to see if it exists
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (e) {
            console.log('Error creating user', e.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;