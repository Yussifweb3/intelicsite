document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulate sending email code
        sendEmailCode(email);
    });
});

function sendEmailCode(email) {
    // Generate a random code
    const emailCode = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('emailCode', emailCode);

    // Simulate sending email
    console.log(`Email sent to ${email} with code: ${emailCode}`);

    // Show email verification section
    document.getElementById('emailVerificationSection').style.display = 'block';
}

function verifyEmailCode() {
    const enteredCode = document.getElementById('emailCode').value;
    const storedCode = localStorage.getItem('emailCode');

    if (enteredCode === storedCode) {
        alert('Email verified successfully!');
        localStorage.removeItem('emailCode');
        // Proceed with the login process
    } else {
        alert('Incorrect code. Please try again.');
    }
}
