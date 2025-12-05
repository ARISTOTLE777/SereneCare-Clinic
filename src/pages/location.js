function validateLogin() {
    var usernameInput = document.getElementById("email").value;
    var passwordInput = document.getElementById("password").value;
    
    var errorElement = document.getElementByClassName("error-msg");

    if (usernameInput === '123' && passwordInput === '123') {
        window.location.href = "index.html";
    } else {
        errorElement.style.display = "block";
        errorElement.innerText = "Incorrect Username or Password";
    }
}
