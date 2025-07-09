const form = document.getElementById("contactForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const message = document.getElementById("message");
const consent = document.getElementById("consent");
const queryTypeRadios = document.querySelectorAll("input[name='queryType']");

const successMessage = document.getElementById("successMessage");

// Helper to show error
function showError(input, message) {
  const errorElement = document.getElementById(`${input.id}Error`);
  if (errorElement) {
    errorElement.textContent = message;
  }
}

// Helper to clear error
function clearError(input) {
  const errorElement = document.getElementById(`${input.id}Error`);
  if (errorElement) {
    errorElement.textContent = "";
  }
}
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent real submission

  let isValid = true;

  // First Name
  if (firstName.value.trim() === "") {
    showError(firstName, "First name is required");
    isValid = false;
  } else {
    clearError(firstName);
  }

  // Last Name
  if (lastName.value.trim() === "") {
    showError(lastName, "Last name is required");
    isValid = false;
  } else {
    clearError(lastName);
  }

  // Email
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value)) {
    showError(email, "Enter a valid email address");
    isValid = false;
  } else {
    clearError(email);
  }

  // Query Type (radio)
  const queryTypeSelected = Array.from(queryTypeRadios).some(radio => radio.checked);
  const queryTypeError = document.getElementById("queryTypeError");
  if (!queryTypeSelected) {
    queryTypeError.textContent = "Please select a query type";
    isValid = false;
  } else {
    queryTypeError.textContent = "";
  }

  // Message
  if (message.value.trim() === "") {
    showError(message, "Message is required");
    isValid = false;
  } else {
    clearError(message);
  }

  // Consent checkbox
  const consentError = document.getElementById("consentError");
  if (!consent.checked) {
    consentError.textContent = "You must consent to be contacted";
    isValid = false;
  } else {
    consentError.textContent = "";
  }

  // If valid, show success message
  if (isValid) {
    form.reset();
    successMessage.hidden = false;

    // Optionally hide it again after 3 seconds
    setTimeout(() => {
      successMessage.hidden = true;
    }, 3000);
  }
});
