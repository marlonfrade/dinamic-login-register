// ===========================================================================================
// ---------------------------------------Formulário Animação-----------------------------------------
// ===========================================================================================

// Boxes
const signinBtn = document.querySelector(".signinBtn");
const signupBtn = document.querySelector(".signupBtn");
const formBx = document.querySelector(".login__formBx");

signupBtn.addEventListener("click", () => {
  const loginEmail = document.querySelector("[loginEmail]");
  const pswLogin = document.querySelector("[password_login]");
  const loginBtn = document.querySelector("[loginSubmit]");

  formBx.classList.add("active");
  loginEmail.value = "";
  pswLogin.value = "";
  loginBtn.classList = "register__button";
});

signinBtn.addEventListener("click", () => {
  const nameSignup = document.querySelector("[name_input]");
  const emailSignup = document.querySelector("[signupEmail]");
  const pswSignup = document.querySelector("[password_signup]");
  const signupBtn = document.querySelector("[SignUpSubmit]");

  formBx.classList.remove("active");
  nameSignup.value = "";
  emailSignup.value = "";
  pswSignup.value = "";
  signupBtn.classList = "register__button";
});

function signup() {
  formBx.classList.add("active");
}

// ===========================================================================================
// ---------------------------------------Eventos da Senha-----------------------------------------
// ===========================================================================================

const eyeLogin = document.querySelector("[eye_login]");
const eyeSignup = document.querySelector("[eye_signup]");

// function to show and hide the Password Value input

// Login
eyeLogin.addEventListener("click", () => {
  const passwordLogin = document.querySelector("[password_login]");

  eyeLogin.classList.toggle("password__eye__view");

  if (passwordLogin.type === "password") {
    passwordLogin.type = "text";
  } else if (passwordLogin.type === "text") {
    passwordLogin.type = "password";
  }
});

// Register
eyeSignup.addEventListener("click", () => {
  const passwordSignup = document.querySelector("[password_signup]");

  eyeSignup.classList.toggle("password__eye__view");

  if (passwordSignup.type === "password") {
    passwordSignup.type = "text";
  } else if (passwordSignup.type === "text") {
    passwordSignup.type = "password";
  }
});

// ===========================================================================================
// ---------------------------------------Modais-----------------------------------------
// ===========================================================================================

// Get the modal
const modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ===========================================================================================
// ---------------------------------------Modal Events-----------------------------------------
// ===========================================================================================

// Login Events

const loginEmail = document.querySelector("[loginEmail]");
const loginPsw = document.querySelector("[password_login]");

// User Typing Email First
loginEmail.addEventListener("keydown", () => {
  const button = document.querySelector("[loginSubmit]");
  loginPsw.addEventListener("keydown", (event) => {
    const key = event.key;

    button.classList.add("filled");

    if (key === "Backspace" || key === "Delete") {
      button.classList.remove("filled");
    }
  });
});

// User Typing Password First
loginPsw.addEventListener("keydown", () => {
  const button = document.querySelector("[loginSubmit]");
  loginEmail.addEventListener("keydown", (event) => {
    const key = event.key;
    button.classList.add("filled");

    if (key === "Backspace" || key === "Delete") {
      button.classList.remove("filled");
    }
  });
});

// Register Events

const name_input = document.querySelector("[name_input]");
const emailSignup = document.querySelector("[signupEmail]");
const pswSignup = document.querySelector("[password_signup]");

// User Typing In order
name_input.addEventListener("keydown", (event) => {
  const key = event.key;
  const button = document.querySelector("[SignUpSubmit]");

  if (key === "Backspace" || key === "Delete") {
    button.classList.remove("filled");
  }

  emailSignup.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key === "Backspace" || key === "Delete") {
      button.classList.remove("filled");
    }

    pswSignup.addEventListener("keydown", (event) => {
      const key = event.key;
      button.classList.add("filled");

      if (key === "Backspace" || key === "Delete") {
        button.classList.remove("filled");
      }
    });
  });
});

// Reset Events
const resetInput = document.querySelector("[resetInput]");

resetInput.addEventListener("keydown", (event) => {
  const button = document.querySelector("[resetButton]");
  const key = event.key;
  button.classList.add("filled");

  if (key === "Backspace" || key === "Delete") {
    button.classList.remove("filled");
  }
});
