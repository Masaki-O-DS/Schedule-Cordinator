import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_ejJ66Czt6V32QdcehVwabHtPpSM93PY",
  authDomain: "schedulecoordination-538cb.firebaseapp.com",
  projectId: "schedulecoordination-538cb",
  storageBucket: "schedulecoordination-538cb.appspot.com",
  messagingSenderId: "657428092252",
  appId: "1:657428092252:web:b65c242edd6a133c5e1d99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
