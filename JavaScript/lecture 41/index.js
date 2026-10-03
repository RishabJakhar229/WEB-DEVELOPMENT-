const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")

const LIMIT = 150

charCount.textContent = `${LIMIT} character remaining`

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage

}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = ""
}


function ValidUsername(username) {
    // check 1
    if (username.value.trim().length === 0) {
        showError(username, "Please enter your name")
        return false
    }

    // check 2
    if (username.value.trim().length < 3) {

        showError(username, "Username must be at least 3 characters")
        return false
    }

    clearError(username)

    return true
}

function ValidPassword(password) {
    // check 1
    if (password.value.trim().length === 0) {
        showError(password, "Please enter your Password")
        return false
    }

    // check 2
    if (password.value.trim().length < 8) {

        showError(password, "Password must be at least  8 characters")
        return false
    }

    clearError(password)

    return true
}

form.addEventListener("submit", (e) => {  // submit form ko kar sakte
    e.preventDefault();
    // const password = document.querySelector("#password").value

    const isUsernameValid = ValidUsername(username); // passing username element
    const isPasswordValid = ValidPassword(password); // passing password element

    // const email = document.querySelector("#email").value
    // console.log({ username: username.value, password: password.value, email, });


    if (isUsernameValid && isPasswordValid) {
        document.querySelector("h1").classList.remove("hidden")
    } else {
        document.querySelector("h1").classList.add("hidden")
    }
})

// btn.addEventListener("click", (e) => {   // btn ko click kar sakte submit nhi
//     e.preventDefault();
//     console.log("hii");
// })


// bio.addEventListener("input", (e) => {
//     const remaining = LIMIT - bio.value.length
//     charCount.textContent = `${remaining} character remaining`
// })



// username.addEventListener("change", (e) => {
// console.log("change event" , username.value);
// })

// username.addEventListener("input", (e) => {
// console.log("input event" , username.value);
// })

// checkbox.addEventListener("change", (e) => {
//     console.log(checkbox.checked);
// })

// country.addEventListener("input", (e) => {
//     console.log(country.value);
// })

// username.addEventListener("focus", (e) => {
//     console.log("focus");
// })

// username.addEventListener("blur", (e) => {
//     console.log("blur");
// })

// password.addEventListener("focus", (e) => {
// passwordHint.classList.remove("hidden")
// })

// password.addEventListener("blur", (e) => {
// passwordHint.classList.add("hidden")
// })

