
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const errorMessage = document.getElementById("error-message");

      if (username === "" || password === "") {
        errorMessage.textContent = "Please enter both username and password.";
        return;
      }

      // Dummy credentials for demo
      if (username === "admin" && password === "medibridge123") {
        alert("Login successful!");
        window.location.href = "admin.html"; // Change to your actual admin/home page
      } else {
        errorMessage.textContent = "Invalid username or password.";
      }
    });
    