import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js'
import { getAuth,GoogleAuthProvider,signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js'

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi7u64_ea1qAU3AdnJx1KTEpFQ6ZuKZY8",
  authDomain: "chatapp-sugyan.firebaseapp.com",
  projectId: "chatapp-sugyan",
  storageBucket: "chatapp-sugyan.firebasestorage.app",
  messagingSenderId: "566616376553",
  appId: "1:566616376553:web:2c02df81f2e43367751c78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize auth
const auth = getAuth();
//getting goole auth provider
const googleAuthProvider = new GoogleAuthProvider();
//sign in popup
function signInWithGoogle(){
 signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      const user = result.user;
      console.log("Signed in user:", user);
    })
    .catch((error) => {
      console.error("Auth error:", error.code, error.message);
    });
}
//getting the signup btton
const signUpButton = document.getElementById('Sign-Up')
//when signup button is clicked     
signUpButton.addEventListener("click", signInWithGoogle);
//getting signup with google
const signWithGoogleUpButton = document.getElementById('signWithGoogleUpButton')
//after clicking google icon
signWithGoogleUpButton.addEventListener("click", signInWithGoogle);
//getting signIn with google
const signInWithGoogleButton = document.getElementById('signInWithGoogleButton')
//after clicking
signInWithGoogleButton.addEventListener("click", signInWithGoogle);