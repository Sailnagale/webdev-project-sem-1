document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  // Store credentials locally in an array
  let users = [{ username: "admin", password: "password123" }];

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate login credentials
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to the home page
    } else {
      alert("Invalid username or password.");
    }
  });
});
