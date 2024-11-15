function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
    } else {
        nameError.style.display = 'none';
    }
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email address';
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');

    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
}

// Add event listeners to trigger validation on input and blur events
document.getElementById('name').addEventListener('input', validateName);
document.getElementById('name').addEventListener('blur', validateName);

document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('password').addEventListener('input', validatePassword);
document.getElementById('password').addEventListener('blur', validatePassword);