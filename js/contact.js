const form = document.querySelector("#contactForm");
const inputFirstName = document.querySelector("#inputFirstName");
const inputLastName = document.querySelector("#inputLastName");
const inputEmail = document.querySelector("#inputEmail");
const inputmessage = document.querySelector("#inputmessage");
const firstNameError = document.querySelector("#firstName_errortext");
const lastNameError = document.querySelector("#lastName_errortext");
const emailError = document.querySelector("#email_errortext");
const messageError = document.querySelector("#message_errortext");
const hiddenInfo = document.querySelector(".hiddenInfo")
// // form validation on blur
inputFirstName.addEventListener("blur", (e) => {
    formSubmitLength(inputFirstName, firstNameError, 1);
})
inputLastName.addEventListener("blur", (e) => {
    formSubmitLength(inputLastName, lastNameError, 1);
})
inputEmail.addEventListener("blur", (e) => {
    formSubmitEmail(inputEmail, emailError);
})
inputmessage.addEventListener("blur", (e) => {
    formSubmitLength(inputmessage, messageError, 20);
})


// form validation on submit
let test = false;
function validateForm() {
    event.preventDefault()
    formSubmitLength(inputFirstName, firstNameError, 1, test);
    formSubmitLength(inputLastName, lastNameError, 1, test);
    formSubmitEmail(inputEmail, emailError);
    formSubmitLength(inputmessage, messageError, 20, test);
    if (test) {
        hiddenInfo.style.display = "flex";
    }
}
form.addEventListener("submit", validateForm);
