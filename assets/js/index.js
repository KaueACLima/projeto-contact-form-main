const form = document.getElementById("contact-form");
const sucessMessage = document.getElementById("sucess-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fistName = document.getElementById("fist-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector("input[name='query-type']:checked");
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  const formAlert = document.querySelectorAll(".form-alert");

  let isValid = true;

  //* Fist name validation
  if (fistName === "") {
    isValid = false;

    document.querySelector("#fist-name + .form-alert").style.display = "block";
    document.querySelector("#fist-name").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#fist-name + .form-alert").style.display = "none";
    document.querySelector("#fist-name").style.border =
      "1px solid var(--medium-gray)";
  }

  //* Last name validation
  if (lastName === "") {
    isValid = false;

    document.querySelector("#last-name + .form-alert").style.display = "block";
    document.querySelector("#last-name").style.border = "1px solid var(--red)";
  } else {
    document.querySelector("#last-name + .form-alert").style.display = "none";
    document.querySelector("#last-name").style.border =
      "1px solid var(--medium-gray)";
  }

  //* email validation
  if (!isValidEmail(email)) {
    isValid = false;

    document.querySelector("#email + .form-alert").style.display = "block";
    document.querySelector("#email").style.border = "1px solid var(--red)";
    ("block");
  } else {
    document.querySelector("#email + .form-alert").style.display = "none";
    document.querySelector("#email").style.border =
      "1px solid var(--medium-gray)";
    ("block");
  }

  //* Query type validation
  if (!queryType) {
    isValid = false;

    document.querySelector(".radio-inputs + .form-alert").style.display =
      "block";
  } else {
    document.querySelector(".radio-inputs + .form-alert").style.display =
      "none";
  }

  //* Message validation
  if (message === "") {
    isValid = false;

    document.querySelector("#message + .form-alert").style.display = "block";
    document.querySelector("#message").style.display = "1px solid var(--red)";
  } else {
    document.querySelector("#message + .form-alert").style.display = "none";
    document.querySelector("#message").style.display =
      "1px solid var(--medium-gray)";
  }

  //* Consent validation
  if (!consent) {
    isValid = false;

    formAlert[5].classList.add('form-error');
  } else {
    formAlert[5].classList.remove('form-error')
  }

  //* Form is valid
  if (isValid) {
    sucessMessage.classList.add("active");
    form.reset();
  }
});

//* Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
