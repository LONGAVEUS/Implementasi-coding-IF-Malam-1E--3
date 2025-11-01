function showRegister() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("register-container").style.display = "block";
}

function showLogin() {
  document.getElementById("register-container").style.display = "none";
  document.getElementById("login-container").style.display = "block";
}

function login() {
  alert("login clicked");
}

function register() {
  alert("register clicked");
}
