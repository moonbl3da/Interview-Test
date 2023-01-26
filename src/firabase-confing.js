import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBQMsCp5dFkWkeiJlB8LoBykXEBjW4HX9U",
  authDomain: "codeinterviewtest-369a8.firebaseapp.com",
  projectId: "codeinterviewtest-369a8",
  storageBucket: "codeinterviewtest-369a8.appspot.com",
  messagingSenderId: "156729520650",
  appId: "1:156729520650:web:3074e9fc9cff0c90aca5f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const  provider = new GoogleAuthProvider();

export {auth,provider};