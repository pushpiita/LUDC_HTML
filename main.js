
// Login Form Handling
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (!email || !password) {
          alert("Please enter both email and password.");
          return;
        }
  
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        alert("Login successful!");
        loginForm.reset();
      });
    }
  
    // Register Form Handling
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
        if (!name || !email || !password || !confirmPassword) {
          alert("Please fill in all fields.");
          return;
        }
  
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
        }
  
        if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
        }
  
        alert("Registration successful!");
        registerForm.reset();
      });
    }
  });
  