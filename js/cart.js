const form = document.querySelector(".cart-form")

const inputFirstName = document.querySelector(".inputFirstName");
const inputLastName = document.querySelector(".inputLastName");
const inputEmail = document.querySelector(".inputEmail");
const inputAddress = document.querySelector(".inputAddress");
const inputPost = document.querySelector(".inputPost");
const inputCity = document.querySelector(".inputCity");

const firstNameError = document.querySelector(".firstNameError");
const lastNameError = document.querySelector(".lastNameError");
const emailError = document.querySelector(".emailError");
const addressError = document.querySelector(".addressError");
const postcodeError = document.querySelector(".postcodeError");
const cityError = document.querySelector(".cityError");

const returnCart = document.querySelector(".returnCart")
const hiddenInfo = document.querySelector(".hiddenInfo")

// form validation on blur
inputFirstName.addEventListener("blur", (e) => {
    formSubmitLength(inputFirstName, firstNameError, 1);
})
inputLastName.addEventListener("blur", (e) => {
    formSubmitLength(inputLastName, lastNameError, 1);
})
inputEmail.addEventListener("blur", (e) => {
    formSubmitEmail(inputEmail, emailError);
})
inputAddress.addEventListener("blur", (e) => {
    formSubmitLength(inputAddress, addressError, 1);
})
inputPost.addEventListener("blur", (e) => {
    formSubmitLength(inputPost, postcodeError, 3);
})
inputCity.addEventListener("blur", (e) => {
    formSubmitLength(inputCity, cityError, 1);
})

// form validation on submit
let test = false;
form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    formSubmitLength(inputFirstName, firstNameError, 1, test);
    formSubmitLength(inputLastName, lastNameError, 1, test);
    formSubmitEmail(inputEmail, emailError);
    formSubmitLength(inputAddress, addressError, 1, test);
    formSubmitLength(inputPost, postcodeError, 3, test);
    formSubmitLength(inputCity, cityError, 1, test);
    if(test){
        hiddenInfo.style.display = "flex";
    }
    
})

function formSubmitLength(input, errortext, len) {
    // validate length
    if (!checkLength(input.value, len)) {
        input.classList.add("inputError");
        errortext.style.display = "block";
        test = false;
        
    } else {
        input.classList.remove("inputError");
        errortext.style.display = "none";
        test = true;
    }
    return test;
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

returnCart.addEventListener("click", (e) => {
    hiddenInfo.style.display = "none";
})