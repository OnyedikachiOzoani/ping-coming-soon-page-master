/** @format */
// select items
const form = document.getElementById("launch-notify-form");
const email = document.getElementById("launch-notify-email");
const errorMessage = document.querySelector(".error-message");

// add event listeners
form.addEventListener("submit", handleSubmit);

// form submit handler
function handleSubmit(event) {
	// check the form validity
	if (email.validity.valid) {
		// allow the form to be submitted
		// remove any error messages
		removeError();
	} else if (email.validity.typeMismatch) {
		showError(event, "invalid email");
	} else if (email.validity.valueMissing) {
		showError(event, "no value");
	}
}

// show error handler
function showError(event, causedBy) {
	// first stop the browser from submitting the form
	event.preventDefault();
	// check what caused the error
	if (causedBy == "invalid email") {
		errorMessage.textContent = "Please provide a valid email address";
	} else if (causedBy == "no value") {
		errorMessage.textContent =
			"Whoops! It looks like you forgot to add your email";
	}
	// add the necessary css classes
	email.classList.add("required");
	errorMessage.classList.add("active");
	// add the input event to validate as user types
	email.addEventListener("input", handleSubmit);
}

// remove error handler
function removeError() {
	// remove the error css classes
	// add the necessary classes
	email.classList.remove("required");
	errorMessage.classList.remove("active");
	// remove the input event from the email input
	email.removeEventListener("input", handleSubmit);
}
