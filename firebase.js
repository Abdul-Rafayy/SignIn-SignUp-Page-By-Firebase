import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut ,sendEmailVerification ,sendPasswordResetEmail ,GoogleAuthProvider,signInWithPopup,RecaptchaVerifier,signInWithPhoneNumber  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcoKXnOdA1M3jMjArB82Qxdsll4oUwDcs",
  authDomain: "user--authentication.firebaseapp.com",
  projectId: "user--authentication",
  storageBucket: "user--authentication.appspot.com",
  messagingSenderId: "856464449879",
  appId: "1:856464449879:web:51a6ce863cb85f7e675e12"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    GoogleAuthProvider ,
    signInWithPopup,
    provider,
    signOut
}
