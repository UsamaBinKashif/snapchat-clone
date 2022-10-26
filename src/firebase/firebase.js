import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, uploadString } from "firebase/storage";

// configuration data
const firebaseConfig = {
  apiKey: "AIzaSyD4dLkCOSryEFKil1jEZ_MPVAVG5ZPKl6c",
  authDomain: "sc-clone-f9782.firebaseapp.com",
  projectId: "sc-clone-f9782",
  storageBucket: "sc-clone-f9782.appspot.com",
  messagingSenderId: "751453031987",
  appId: "1:751453031987:web:e6b2e5ed0cff57496fdd46",
};

// initializing the app
initializeApp(firebaseConfig);

// initializing firestore database
const DB = getFirestore();

// initializing firebase authentication
const AUTH = getAuth();

// initializing firebase storage
const STORAGE = getStorage();

// initializing firebase google authentication
const PROVIDER = new GoogleAuthProvider();

export { DB, AUTH, STORAGE, PROVIDER };
