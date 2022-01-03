import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Bnwme7B0uU76FffV2MQ7Xu0qu2fCyQc",
  authDomain: "example-afe96.firebaseapp.com",
  projectId: "example-afe96",
  storageBucket: "example-afe96.appspot.com",
  messagingSenderId: "156441198127",
  appId: "1:156441198127:web:ba17a494ad90dc486390da",
  measurementId: "G-ETDY7NPXHT",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
