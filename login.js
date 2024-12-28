document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Perform basic validation
    if (username === "" || password === "") {
      alert("Please fill in both fields.");
      return;
    }

    // Simulate a login action (this is just for demonstration)
    if (username === "admin" && password === "password123") {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to a dashboard page
    } else {
      alert("Invalid username or password.");
    }
  });
});
