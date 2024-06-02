import { auth } from './firebase-config';

// Sign in function
const signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in:', errorCode, errorMessage);
        });
};

// Sign out function
const signOut = () => {
    auth.signOut().then(() => {
        console.log('User signed out');
    }).catch((error) => {
        console.error('Error signing out:', error);
    });
};

export { signIn, signOut };
