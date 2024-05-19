// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    User
} from "firebase/auth";
import { get } from "http";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByRPDsqmA78ZVj-JiW7NBL_1s5GvI2soI",
  authDomain: "yt-clone-f1c15.firebaseapp.com",
  projectId: "yt-clone-f1c15",
  appId: "1:373668758153:web:d3240adb0531c9bf673c58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

/**
 * Signs the user in with google popup
 * @returns a promise that resolves with the user
 */

export function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs the user out
 * @returns a promise that resolves when the user is signed out
 */
export function signOut() {
    return auth.signOut();
}

/**
 * Trigger a callback when the user's auth state changes
 * @returns a function that removes the callback
 */
export function onAuthStateChangedHelper(callback: (user: User | null)=> void) {
    return onAuthStateChanged(auth, callback);
}