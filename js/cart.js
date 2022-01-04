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
    if (!checkLength(e.target.value, 1)) {
        e.target.classList.add("inputError");
        firstNameError.style.display = "block";
    } else {
        e.target.classList.remove("inputError");
        firstNameError.style.display = "none";
    }
})
inputLastName.addEventListener("blur", (e) => {
    if (!checkLength(e.target.value, 1)) {
        e.target.classList.add("inputError");
        lastNameError.style.display = "block";
    } else {
        e.target.classList.remove("inputError");
        lastNameError.style.display = "none";
    }
})
inputPhoneNum.addEventListener("blur", (e) => {
    if (!validatePhone(e.target.value, 1)) {
        e.target.classList.add("inputError");
        phoneError.style.display = "block";
    } else {
        e.target.classList.remove("inputError");
        phoneError.style.display = "none";
    }
})
inputEmail.addEventListener("blur", (e) => {
    if (!validateEmail(e.target.value)) {
        e.target.classList.add("inputError");
        emailError.style.display = "block";
    } else {
        e.target.classList.remove("inputError");
        emailError.style.display = "none";
    }
})
inputAddress.addEventListener("blur", (e) => {
    if (!checkLength(e.target.value, 1)) {
        e.target.classList.add("inputError");
        addressError.style.display = "block";
    } else {
        e.target.classList.remove("inputError");
        addressError.style.display = "none";
    }
})
inputPost.addEventListener("blur", (e) => {
    if (!checkLength(e.target.value, 3)) {
        e.target.classList.add("inputError");
        postcodeError.style.display = "block";
    } else {
        e.target.classList.remove("inputError");
        postcodeError.style.display = "none";
    }
})
inputCity.addEventListener("blur", (e) => {
    if (!checkLength(e.target.value, 1)) {
        e.target.classList.add("inputError");
        cityError.style.display = "block";
    } else {
        e.target.classList.remove("inputError");
        cityError.style.display = "none";
    }
})