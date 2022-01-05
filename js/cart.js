const form = document.querySelector(".cart-form")

const inputFirstName = document.querySelector(".inputFirstName");
const inputLastName = document.querySelector(".inputLastName");
const inputPhoneNum = document.querySelector(".inputPhoneNum");
const inputEmail = document.querySelector(".inputEmail");
const inputAddress = document.querySelector(".inputAddress");
const inputPost = document.querySelector(".inputPost");
const inputCity = document.querySelector(".inputCity");

const firstNameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const phoneError = document.querySelector(".phoneError");
const emailError = document.querySelector(".emailError");
const addressError = document.querySelector(".addressError");
const postcodeError = document.querySelector(".postcodeError");
const cityError = document.querySelector(".cityError");

// form validation on blur
inputFirstName.addEventListener("blur", (e) => {
    formSubmitLength(inputFirstName, firstNameError);
})
inputLastName.addEventListener("blur", (e) => {
    formSubmitLength(inputLastName,lastNameError);
})
inputPhoneNum.addEventListener("blur", (e) => {
    formSubmitPhone(inputPhoneNum,phoneError);
})
inputEmail.addEventListener("blur", (e) => {
    formSubmitEmail(inputEmail, emailError);
})
inputAddress.addEventListener("blur", (e) => {
    formSubmitLength(inputAddress, addressError);
})
inputPost.addEventListener("blur", (e) => {
    formSubmitLength(inputPost, postcodeError);
})
inputCity.addEventListener("blur", (e) => {
    formSubmitLength(inputCity, cityError);
})

// form validation on submit

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formSubmitLength(inputFirstName, firstNameError);
    formSubmitLength(inputLastName,lastNameError);
    formSubmitPhone(inputPhoneNum,phoneError);
    formSubmitEmail(inputEmail, emailError);
    formSubmitLength(inputAddress, addressError);
    formSubmitLength(inputPost, postcodeError);
    formSubmitLength(inputCity, cityError);
})

function formSubmitLength(input, errortext) {
    // validate length
    if (!checkLength(input.value, 1)) {
        input.classList.add("inputError");
        errortext.style.display = "block";
    } else {
        input.classList.remove("inputError");
        errortext.style.display = "none";
    }
}

function formSubmitEmail(email, errortext) {
    // validate email
    if (!validateEmail(email.value)) {
        email.classList.add("inputError");
        errortext.style.display = "block";
    } else {
        email.classList.remove("inputError");
        errortext.style.display = "none";
    }
}
function formSubmitPhone(phone, errortext) {
    // validate phone nr
    if (!validatePhone(phone.value, 1)) {
        phone.classList.add("inputError");
        errortext.style.display = "block";
    } else {
        phone.classList.remove("inputError");
        errortext.style.display = "none";
    }
}