document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let successMessage = document.getElementById("successMessage");
    
    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";
    
    let valid = true;
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.textContent = "Correo electrónico inválido";
        valid = false;
    }
    
    if (password.length < 6) {
        passwordError.textContent = "La contraseña debe tener al menos 6 caracteres";
        valid = false;
    }
    
    if (valid) {
        successMessage.textContent = "Inicio de sesión exitoso. Redirigiendo...";
        setTimeout(() => {
            window.location.href = "agenda.html";
        }, 2000);
    }
});
