document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    function showError(input, message) {
        const errorDiv = input.parentNode.querySelector('.invalid-feedback');
        errorDiv.textContent = message;
        input.classList.add('is-invalid');
    }

    function clearError(input) {
        const errorDiv = input.parentNode.querySelector('.invalid-feedback');
        errorDiv.textContent = '';
        input.classList.remove('is-invalid');
    }

    function validateFullName() {
        if (fullName.value.trim().length < 5) {
            showError(fullName, 'Full Name must be at least 5 characters.');
            return false;
        }
        clearError(fullName);
        return true;
    }

    function validateEmail() {
        const value = email.value.trim();
        if (!value.includes('@') || value.startsWith('@') || value.endsWith('@')) {
            showError(email, 'Enter a correct email.');
            return false;
        }
        clearError(email);
        return true;
    }

    function validatePhone() {
        const value = phone.value.trim();
        if (value === '123456789' || !/^\d{10}$/.test(value)) {
            showError(phone, 'Phone must be a 10-digit number and not 123456789.');
            return false;
        }
        clearError(phone);
        return true;
    }

    function validatePassword() {
        const value = password.value;
        if (
            value.length < 8 ||
            value.toLowerCase() === 'password' ||
            value.toLowerCase() === fullName.value.trim().toLowerCase()
        ) {
            showError(password, 'Password is not strong.');
            return false;
        }
        clearError(password);
        return true;
    }

    function validateConfirmPassword() {
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, 'Passwords do not match.');
            return false;
        }
        clearError(confirmPassword);
        return true;
    }

    // Live validation
    fullName.addEventListener('change', validateFullName);
    email.addEventListener('change', validateEmail);
    phone.addEventListener('change', validatePhone);
    password.addEventListener('change', validatePassword);
    confirmPassword.addEventListener('change', validateConfirmPassword);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let valid =
            validateFullName() &
            validateEmail() &
            validatePhone() &
            validatePassword() &
            validateConfirmPassword();

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
            [fullName, email, phone, password, confirmPassword].forEach(clearError);
        }
    });
});