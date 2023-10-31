const body = document.querySelector("body"),
      logIn = body.querySelector(".login"),
      log_in = body.querySelector(".login"),
      signUp = body.querySelector(".sign-up"),
      signUpLink = body.querySelector(".signup"),
      signInLink = body.querySelector(".signin");


signUpLink.addEventListener("click", () => {
    signUp.style.display = "block";
    log_in.style.display = "none";
});

signInLink.addEventListener("click", () => {
    log_in.style.display = "block";
    signUp.style.display = "none";
});

logIn.addEventListener("click", () => {
    
});