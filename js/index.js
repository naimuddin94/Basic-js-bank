const password = document.getElementById("password");

document.getElementById("eye").addEventListener("click", function () {
  const eye = document.getElementById("eye");

  if (password.type === "password") {
    password.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye", "text-red-400");
  } else if (password.type === "text") {
    password.type = "password";
    eye.classList.remove("fa-eye", "text-red-400");
    eye.classList.add("fa-eye-slash");
  }
});

document.getElementById("login").addEventListener("click", function () { 
  const userName = getInputValue("username");
  const password = getInputValue("password");
  if (userName === 'nafisa' && password === '1234') {
    location.assign("http://127.0.0.1:5500/dashboard.html");
  } else {
    alert('Please enter valid user name and password');
  }
})