// code for moving slider in navbar
const navbar = document.querySelector('.navbar-items-area');
const slider = document.querySelector('.slider');
const items = document.querySelectorAll('.nav-item');
const defaultItem = document.querySelector('.default');

function moveSlider(item) {
    const rect = item.getBoundingClientRect();
    const parentRect = navbar.getBoundingClientRect();

    slider.style.width = rect.width + 'px';
    slider.style.left = (rect.left - parentRect.left) + 'px';
}

function setActive(item) {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
}

/* INITIAL STATE */
setActive(defaultItem);
moveSlider(defaultItem);

/* HOVER */
items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        setActive(item);
        moveSlider(item);
    });
});

/* LEAVE NAVBAR */
navbar.addEventListener('mouseleave', () => {
    setActive(defaultItem);
    moveSlider(defaultItem);
});
//--------------------------------------------------------




 // Function to switch between forms
 function switchForm(formType) {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    if (formType === 'login') {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    } else {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    }
}

// Handle social login/signup (placeholder)
function handleSocial(provider) {
    console.log(`Redirecting to ${provider} OAuth...`);
    // In a real app, integrate with OAuth library here
}

// Show alert inside form
function showAlert(formId, message) {
    const alertDiv = document.getElementById(formId + '-alert');
    alertDiv.textContent = message;
    alertDiv.classList.add('show');
    setTimeout(() => {
        alertDiv.classList.remove('show');
    }, 5000); // Hide after 5 seconds
}

// Basic form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    const email = form.querySelector('input[name="email"]');
    const password = form.querySelector('input[name="password"]');
    let isValid = true;
    let errors = [];

    // Email validation
    if (!email.value) {
        errors.push('Email is required.');
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        errors.push('Please enter a valid email.');
        isValid = false;
    }

    // Password validation
    if (!password.value) {
        errors.push('Password is required.');
        isValid = false;
    } else if (password.value.length < 6) {
        errors.push('Password must be at least 6 characters.');
        isValid = false;
    }

    if (!isValid) {
        showAlert(formId, errors.join(' '));
    }
    return isValid;
}

// Attach validation to forms
document.getElementById('signup').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm('signup')) {
        console.log('Signup successful!');
        // Handle signup logic here (e.g., send to server)
    }
});

document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm('login')) {
        console.log('Login successful!');
        // Handle login logic here (e.g., send to server)
    }
});