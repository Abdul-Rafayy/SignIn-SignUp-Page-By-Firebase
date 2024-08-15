import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail,GoogleAuthProvider,signInWithPopup,provider } from "./firebase.js";


let signup = (event) => {
  event.preventDefault();

  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let errorMessage = document.getElementById("errorMessage");
  let successMessage = document.getElementById("successMessage");

  errorMessage.style.display = "none";
  errorMessage.textContent = "";
  successMessage.style.display = "none";
  successMessage.textContent = "";

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      successMessage.style.display = "block";
      successMessage.textContent = `Sign-up successful! Welcome, ${res.user.email}`;
      
      email.value = "";
      password.value = "";
    })
    .catch((error) => {
      errorMessage.style.display = "block";
      errorMessage.textContent = `Error: ${error.message}`;
    });
};

let signupBtn = document.getElementById("signupBtn");
signupBtn.addEventListener("click", signup);


let messageElement = document.getElementById("message");

let displayMessage = (msg, isError = true) => {
    messageElement.style.display = "block";
    messageElement.textContent = msg;
    messageElement.style.color = isError ? "red" : "green";
    setTimeout(() => {
        messageElement.style.display = "none";
    }, 5000);
};

onAuthStateChanged(auth, (user) => {
    if (user) {
        displayMessage(`Welcome back, ${user.email}`, false);
    } else {
        displayMessage("User not signed in.");
    }
});

let signin = (event) => {
    event.preventDefault();
    let email = document.getElementById("Lemail").value;
    let password = document.getElementById("Lpassword").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            displayMessage(`Sign-in successful! Welcome, ${res.user.email}`, false);
        })
        .catch((error) => {
            displayMessage(`Error: ${error.message}`);
        });
};

let signinBtn = document.getElementById("signinBtn");
signinBtn.addEventListener("click", signin);

let logout = () => {
    signOut(auth).then(() => {
        displayMessage("Logout successful!", false);
    }).catch((error) => {
        displayMessage(`Error: ${error.message}`);
    });
};

let logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", logout);

let forgot = () => {
    let email = document.getElementById("Lemail").value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            displayMessage("Password reset email sent!", false);
        })
        .catch((error) => {
            displayMessage(`Error: ${error.message}`);
        });
};

let forgotBtn = document.getElementById("forgotBtn");
forgotBtn.addEventListener("click", forgot);

let loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            displayMessage(`Google sign-in successful! Welcome, ${user.email}`, false);
        })
        .catch((error) => {
            displayMessage(`Error: ${error.message}`);
        });
};

let googleBtn = document.getElementById("googleBtn");
googleBtn.addEventListener("click", loginWithGoogle);
