import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
const db = getFirestore();

// initializing firebase authentication
const auth = getAuth();

// initializing firebase storage
const storage = getStorage();

// initializing firebase google authentication
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider }; 
