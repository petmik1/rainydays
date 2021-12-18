console.log("hello world ")
const contactForm = document.querySelector("#contactForm");
const inputFirstName = document.querySelector("#inputFirstName");
const firstName_errortext = document.querySelector("#firstName_errortext");
const inputLastName = document.querySelector("#inputLastName");
const lastName_errortext = document.querySelector("#lastName_errortext");

function validateForm() {
    event.preventDefault()
    if (checkLength(inputFirstName.value, 1)) {
        firstName_errortext.style.display = "none";
        inputFirstName.classList.remove ("inputError");
    } else {
        firstName_errortext.style.display = "block";
        inputFirstName.classList.add ("inputError");
    }

    if (checkLength(inputLastName.value, 1)) {
        lastName_errortext.style.display = "none";
    } else {
        lastName_errortext.style.display = "block";
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