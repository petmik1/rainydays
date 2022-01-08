function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

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