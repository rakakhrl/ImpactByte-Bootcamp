let inputUsername = document.getElementById("username");
let inputPassword = document.getElementById("password");
let hasilUsername = document.getElementById("hasil-username");
let hasilPassword = document.getElementById("hasil-password");
let alertEmpty = document.getElementById("alert-empty");
let registerBtn = document.getElementById("register-btn");

let credential = [];

registerBtn.addEventListener("click", register);

function showAlert() {
  alertEmpty.classList.remove("invisible");
}

function hideAlert() {
  alertEmpty.classList.add("invisible");
}

function register() {
  if (inputUsername.value.length < 6 || inputPassword.value.length < 8) {
    showAlert();
  } else {
    credential.push(inputUsername.value);
    credential.push(inputPassword.value);

    if (!alertEmpty.classList.contains("invisible")) {
      hideAlert();
    }

    console.log(credential[0]);
    console.log(credential[1]);

    hasilUsername.innerText = credential[0];
    hasilPassword.innerText = credential[1].replace(/t/g, "*");
    inputUsername.value = "";
    inputPassword.value = "";
  }
}
