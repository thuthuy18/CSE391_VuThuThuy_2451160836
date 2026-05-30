// =========================
// SELECT ELEMENTS
// =========================

const form =
    document.getElementById("registerForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const confirmInput =
    document.getElementById("confirmPassword");

const phoneInput =
    document.getElementById("phone");

const submitBtn =
    document.getElementById("submitBtn");

// =========================
// VALIDATION STATE
// =========================

let validName = false;

let validEmail = false;

let validPassword = false;

let validConfirm = false;

let validPhone = false;

// =========================
// NAME VALIDATION
// =========================

nameInput.addEventListener("input", () => {

    const value =
        nameInput.value.trim();

    const icon =
        document.getElementById("nameIcon");

    if(
        value.length >= 2 &&
        value.length <= 50
    ){

        validName = true;

        icon.textContent = "✅";

        document
            .getElementById("nameError")
            .textContent = "";

    }else{

        validName = false;

        icon.textContent = "❌";

        document
            .getElementById("nameError")
            .textContent =
                "Name must be 2-50 characters";
    }

    checkForm();

});

// =========================
// EMAIL VALIDATION
// =========================

emailInput.addEventListener("input", () => {

    const email =
        emailInput.value.trim();

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(regex.test(email)){

        validEmail = true;

        document
            .getElementById("emailError")
            .textContent = "";

    }else{

        validEmail = false;

        document
            .getElementById("emailError")
            .textContent =
                "Invalid email format";
    }

    checkForm();

});

// =========================
// PASSWORD STRENGTH
// =========================

passwordInput.addEventListener("input", () => {

    const password =
        passwordInput.value;

    const bar =
        document.getElementById("strengthBar");

    const text =
        document.getElementById("strengthText");

    // WEAK

    if(password.length < 8){

        bar.style.width = "33%";

        bar.style.backgroundColor = "red";

        text.textContent = "Weak";

        text.style.color = "red";

        validPassword = false;

    }

    // MEDIUM

    else if(
        /[A-Za-z]/.test(password) &&
        /\d/.test(password)
    ){

        bar.style.width = "66%";

        bar.style.backgroundColor = "orange";

        text.textContent = "Medium";

        text.style.color = "orange";

        validPassword = true;

    }

    // STRONG

    if(
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*]/.test(password) &&
        password.length >= 8
    ){

        bar.style.width = "100%";

        bar.style.backgroundColor = "green";

        text.textContent = "Strong";

        text.style.color = "green";

        validPassword = true;

    }

    validateConfirm();

    checkForm();

});

// =========================
// CONFIRM PASSWORD
// =========================

confirmInput.addEventListener("input", () => {

    validateConfirm();

    checkForm();

});

function validateConfirm(){

    if(
        confirmInput.value ===
        passwordInput.value &&
        confirmInput.value !== ""
    ){

        validConfirm = true;

        document
            .getElementById("confirmError")
            .textContent = "";

    }else{

        validConfirm = false;

        document
            .getElementById("confirmError")
            .textContent =
                "Passwords do not match";
    }

}

// =========================
// PHONE FORMAT
// =========================

phoneInput.addEventListener("input", () => {

    let value =
        phoneInput.value
            .replace(/\D/g, "");

    value = value.substring(0,10);

    if(value.length > 4){

        value =
            value.slice(0,4) +
            "-" +
            value.slice(4);

    }

    if(value.length > 8){

        value =
            value.slice(0,8) +
            "-" +
            value.slice(8);

    }

    phoneInput.value = value;

    if(
        value.replace(/-/g,"").length === 10
    ){

        validPhone = true;

        document
            .getElementById("phoneError")
            .textContent = "";

    }else{

        validPhone = false;

        document
            .getElementById("phoneError")
            .textContent =
                "Phone must be 10 digits";
    }

    checkForm();

});

// =========================
// ENABLE SUBMIT
// =========================

function checkForm(){

    submitBtn.disabled = !(
        validName &&
        validEmail &&
        validPassword &&
        validConfirm &&
        validPhone
    );

}

// =========================
// SUBMIT
// =========================

form.addEventListener("submit", e => {

    e.preventDefault();

    const modal =
        document.getElementById("successModal");

    const userInfo =
        document.getElementById("userInfo");

    userInfo.innerHTML = `
        <p>
            <strong>Name:</strong>
            ${nameInput.value}
        </p>

        <p>
            <strong>Email:</strong>
            ${emailInput.value}
        </p>

        <p>
            <strong>Phone:</strong>
            ${phoneInput.value}
        </p>
    `;

    modal.classList.remove("hidden");

});

// =========================
// CLOSE MODAL
// =========================

document
    .getElementById("closeModal")
    .addEventListener("click", () => {

        document
            .getElementById("successModal")
            .classList.add("hidden");

    });