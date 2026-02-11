import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js'
import { getAuth,GoogleAuthProvider,signInWithPopup, onAuthStateChanged,FacebookAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword   } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js'

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
//cheking if the user is logged in expect sugyan to uncoment this part when working on the actual chat app
onAuthStateChanged(auth, (user) => {
  if (user) {
   //  window.location.href = 'afterlogin.html'
  }
});
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
//signin popup for facebook signin
function signInWithFacebook(){
   const provider = new FacebookAuthProvider(); // ✅ create instance
  signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Logged in user:", user);
      })
      .catch((error) => {
        console.error(error);
      });
}
//email signup
async function signUpWithEmail() {
  //getting data from form
const email = document.getElementById("signup-email").value;
const password = document.getElementById("signup-password").value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);
  } catch (error) {
    if(error.code == 'auth/email-already-in-use'){
      alert('Email Already In Use')//add a better way to tell the user that the email is aready in use
    }
    else{
      console.log(error.code);
    }
  }
}
//email lgoin
async function signInWithEmail() {
  //getting data from form
const email = document.getElementById("login-email").value;
const password = document.getElementById("login-password").value;
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);
  } catch (error) {
    if(error.code == 'auth/invalid-email'){
      alert('Email Invalid')//add a bette way to give this info to the user
    }
    else if (error.code == 'auth/invalid-login-credentials'){
      alert('Invalid login creds')//add a bette way to give this info to the user
    }
    else{
      console.error(error.code);
    }
  }
}
//get email signup bton
const signUpWithEmailButton = document.getElementById('signUpWithEmailButton')
//after click
signUpWithEmailButton.addEventListener("click", await signUpWithEmail);
//get email signup bton
const signInWithEmailButton = document.getElementById('signInWithEmailButton')
//after click
signInWithEmailButton.addEventListener("click", await signInWithEmail);
//getting signup with google
const signUpWithGoogleButton = document.getElementById('signUpWithGoogleButton')
//after clicking google icon
signUpWithGoogleButton.addEventListener("click", signInWithGoogle);
//getting signIn with google
const signInWithGoogleButton = document.getElementById('signInWithGoogleButton')
//after clicking
signInWithGoogleButton.addEventListener("click", signInWithGoogle);
//getting signup with google
const signUpWithFacebookButton = document.getElementById('signUpWithFacebookButton')
//after clicking google icon
signUpWithFacebookButton.addEventListener("click", signInWithFacebook);
//getting signIn with google
const signInWithFacebookButton = document.getElementById('signInWithFacebookButton')
//after clicking
signInWithFacebookButton.addEventListener("click", signInWithFacebook);
