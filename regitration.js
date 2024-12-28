document.addEventListener("DOMContentLoaded", function () {
  // Store registration data locally in an array
  let registrations = [];

  const registrationForm = document.getElementById("registrationForm");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const businessType = document.getElementById("business_type").value;

    // Store the form data in an object
    const registrationData = {
      name: name,
      email: email,
      dob: dob,
      businessType: businessType,
    };

    // Add the registration data to the array
    registrations.push(registrationData);

    // Log the array to the console for testing
    console.log("Registrations:", registrations);

    // Optionally, you can store the data in localStorage
    localStorage.setItem("registrations", JSON.stringify(registrations));

    // Reset the form
    registrationForm.reset();

    // Show a success message
    alert("Registration successful! Your data has been saved.");
  });
});
