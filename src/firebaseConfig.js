import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyCpAE-GOmoLyRh68WPuxpQ03pF4uYU1c8s",
  authDomain: "linkpath-auth.firebaseapp.com",
  projectId: "linkpath-auth",
  storageBucket: "linkpath-auth.appspot.com",
  messagingSenderId: "391443086152",
  appId: "1:391443086152:web:aaeb7ae345e9efb8bd517d"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app, "gs://linkpath-auth.appspot.com")
 
  