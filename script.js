```javascript
const core = document.getElementById("core");
const artwork = document.querySelector(".art-section");

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const strengthBar = document.getElementById("strengthBar");
const passwordHint = document.getElementById("passwordHint");

const form = document.getElementById("signupForm");
const status = document.getElementById("status");
const submitButton = document.getElementById("submitButton");


// ========================================
// INTERACTIVE ARTWORK
// ========================================

artwork.addEventListener("pointermove", function (event) {

    const rectangle = artwork.getBoundingClientRect();

    const x =
        (event.clientX - rectangle.left) /
        rectangle.width -
        0.5;

    const y =
        (event.clientY - rectangle.top) /
        rectangle.height -
        0.5;


    core.style.transform =
        `translate(
            calc(-50% + ${x * 25}px),
            calc(-50% + ${y * 25}px)
        )`;
});


artwork.addEventListener("pointerleave", function () {

    core.style.transform =
        "translate(-50%, -50%)";
});


// ========================================
// SHOW / HIDE PASSWORD
// ========================================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        password.type = "password";

        togglePassword.textContent = "Show";
    }
});


// ========================================
// PASSWORD STRENGTH
// ========================================

password.addEventListener("input", function () {

    const value = password.value;

    let score = 0;


    if (value.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(value)) {
        score++;
    }

    if (/[0-9]/.test(value)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
    }


    const percentage = score * 25;

    strengthBar.style.width =
        percentage + "%";


    if (value.length === 0) {

        passwordHint.textContent =
            "Use 8+ characters with numbers and symbols.";

    }

    else if (score <= 1) {

        passwordHint.textContent =
            "Weak password — add numbers and symbols.";

    }

    else if (score === 2 || score === 3) {

        passwordHint.textContent =
            "Good password — make it more complex.";

    }

    else {

        passwordHint.textContent =
            "Strong password ✓";
    }

});


// ========================================
// FORM SUBMISSION
// ========================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name")
        .value
        .trim();

    const email =
        document.getElementById("email")
        .value
        .trim();


    if (!name || !email || !password.value) {

        status.textContent =
            "Please complete all required fields.";

        return;
    }


    status.textContent =
        "✓ Welcome to Team 2, " + name + "!";


    submitButton.textContent =
        "Account Created ✓";
});
```
