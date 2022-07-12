"use strict";
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginResultDiv = document.getElementById("loginResult");

form.addEventListener("submit", sendLogin);

function sendLogin(e) {
  // prevent page from refreshing when form is submitted
  e.preventDefault();

  fetch("http://localhost:4000/loginWithFetch", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailInput.value,
      password: passwordInput.value,
    }),
  }).then((res) => {
    if (res.status === 200) {
      loginResultDiv.innerHTML =
        '<span style="color: green">Login Successful</span>';
    } else if (res.status === 404) {
      loginResultDiv.innerHTML = '<span style="color: red">Login Failed</span>';
    }
  });
}
