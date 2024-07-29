document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('enrollmentForm')) {
        document.getElementById('enrollmentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            if (!validateCaptcha()) return;

            const firstName = document.getElementById('firstName').value;
            const middleName = document.getElementById('middleName').value;
            const lastName = document.getElementById('lastName').value;
            const dob = document.getElementById('dob').value;
            const country = document.getElementById('country').value;
            const city = document.getElementById('city').value;
            const education = document.getElementById('education').value;
            const currentJob = document.getElementById('currentJob').value;
            const whyChoose = document.getElementById('whyChoose').value;
            const expectations = document.getElementById('expectations').value;
            const password = document.getElementById('password').value;
            const email = document.getElementById('email').value;

            const user = { firstName, middleName, lastName, dob, country, city, education, currentJob, whyChoose, expectations, password, email };
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            alert('Form submitted successfully!');
            this.reset();
            generateCaptcha();

            // Redirect to learningDashboard.html
            window.location.href = 'learningDashboard.html';
        });
    }

    if (document.getElementById('databaseTable')) {
        loadDatabase();

        document.getElementById('delete').addEventListener('click', function() {
            const name = document.getElementById('deleteName').value.trim();
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users = users.filter(user => user.firstName !== name);
            localStorage.setItem('users', JSON.stringify(users));
            loadDatabase();
        });

        document.getElementById('deleteAll').addEventListener('click', function() {
            localStorage.removeItem('users');
            loadDatabase();
        });

        document.getElementById('print').addEventListener('click', function() {
            window.print();
        });
    }

    if (document.getElementById('captchaCode')) {
        generateCaptcha();
    }
});

function generateCaptcha() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captchaCode = '';
    for (var i = 0; i < 5; i++) {
        captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captchaCode').innerText = captchaCode;
}

function validateCaptcha() {
    var captchaInput = document.getElementById('captchaInput').value;
    var captchaCode = document.getElementById('captchaCode').innerText;
    if (captchaInput !== captchaCode) {
        alert('CAPTCHA incorrect. Please try again.');
        generateCaptcha();
        return false;
    }
    return true;
}

function loadDatabase() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tbody = document.getElementById('databaseTable').querySelector('tbody');
    tbody.innerHTML = '';

    users.forEach(user => {
        const tr = document.createElement('tr');
        for (const key in user) {
            const td = document.createElement('td');
            td.innerText = user[key];
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    });
}
