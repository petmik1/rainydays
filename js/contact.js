console.log("hello world ")
const contactForm = document.querySelector("#contactForm");
const inputFirstName = document.querySelector("#inputFirstName");
const firstName_errortext = document.querySelector("#firstName_errortext");
const inputLastName = document.querySelector("#inputLastName");
const lastName_errortext = document.querySelector("#lastName_errortext");
const inputPhone = document.querySelector("#inputPhone");
const phone_errortext = document.querySelector("#phone_errortext");
const inputEmail = document.querySelector("#inputEmail");
const email_errortext = document.querySelector("#email_errortext");
const inputmessage = document.querySelector("#inputmessage");
const message_errortext = document.querySelector("#message_errortext");

function validateForm() {
    event.preventDefault()
    if (checkLength(inputFirstName.value, 1)) {
        firstName_errortext.style.display = "none";
        inputFirstName.classList.remove("inputError");
    } else {
        firstName_errortext.style.display = "block";
        inputFirstName.classList.add("inputError");
    }

    if (checkLength(inputLastName.value, 1)) {
        lastName_errortext.style.display = "none";
        inputLastName.classList.remove("inputError");
    } else {
        lastName_errortext.style.display = "block";
        inputLastName.classList.add("inputError");
    }

    if (checkLength(inputPhone.value, 1)) {
        phone_errortext.style.display = "none";
        inputPhone.classList.remove("inputError");
    } else {
        phone_errortext.style.display = "block";
        inputPhone.classList.add("inputError");
    }

    if (checkLength(inputEmail.value, 1)) {
        email_errortext.style.display = "none";
        inputEmail.classList.remove("inputError");
    } else {
        email_errortext.style.display = "block";
        inputEmail.classList.add("inputError");
    }

    if (checkLength(inputmessage.value, 1)) {
        message_errortext.style.display = "none";
        inputmessage.classList.remove("inputError");
    } else {
        message_errortext.style.display = "block";
        inputmessage.classList.add("inputError");
    }



}

contactForm.addEventListener("submit", validateForm);





function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}