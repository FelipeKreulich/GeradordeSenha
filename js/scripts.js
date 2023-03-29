let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let passwordCopy = document.querySelector(".copypassword");
let alertMessage = document.querySelector(".alerta");

let charset = "abcdefgfhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;
}

function generatePassword() {

  alertMessage.style.display = "block";

  setTimeout(() => {
    alertMessage.style.display = "none";
  },1500)

  let pass = "";
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }

  containerPassword.classList.remove("hide");

  password.innerHTML = pass;
  newPassword = pass;
}

function copyPassword() {
  passwordCopy.style.display = "block";
  setTimeout(() => {
    passwordCopy.style.display = "none";
  },1500)

  navigator.clipboard.writeText(newPassword);
}