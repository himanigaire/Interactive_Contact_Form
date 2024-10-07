const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');
const errorMessages = document.querySelectorAll('span.error-message');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        setError(nameInput, 'Name is required');
        isValid = false;
    } else {
        clearError(nameInput);
    }

    // Email validation
    if (!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, 'Valid email is required');
        isValid = false;
    } else {
        clearError(emailInput);
    }

    // Message validation
    if (messageInput.value.trim() === '') {
        setError(messageInput, 'Message is required');
        isValid = false;
    } else {
        clearError(messageInput);
    }

    // If all fields are valid, show success message
    if (isValid) {
        successMessage.classList.add('show', 'fade-in');
        errorMessage.classList.remove('show');
        form.reset(); // Clear the form fields
    } else {
        errorMessage.classList.add('show', 'fade-in');
        successMessage.classList.remove('show');
    }
});

// Helper functions
function setError(input, message) {
    const formGroup = input.parentElement;
    const span = formGroup.querySelector('span.error-message');
    span.innerText = message;
    span.style.display = 'block';
}

function clearError(input) {
    const formGroup = input.parentElement;
    const span = formGroup.querySelector('span.error-message');
    span.style.display = 'none';
}

function isValidEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}
