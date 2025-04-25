import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.href = 'home.html')
    .catch(err => alert(err.message));
};

window.register = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert('Registration successful! Please login.'))
    .catch(err => alert(err.message));
};
