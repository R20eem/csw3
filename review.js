// Student ID 201691778, Reem Almutairi
// the javascript should save the user's data
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('reviewForm');

    // to save form data to local storage
    function saveFormData() {
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            age: document.getElementById('age').value,
            score: document.getElementById('score').value,
            newsletter: document.getElementById('newsletter').checked,
            privacy: document.getElementById('privacy').checked,
            review: document.getElementById('review').value
        };
        localStorage.setItem('reviewFormData', JSON.stringify(formData));
    }

    // Load form data from local storage and then display the user's name in thankyou.html page
    function loadFormData() {
        var savedData = JSON.parse(localStorage.getItem('reviewFormData'));
        if (savedData) {
            document.getElementById('name').value = savedData.name;
            document.getElementById('email').value = savedData.email;
            document.getElementById('password').value = savedData.password;
            document.getElementById('age').value = savedData.age;
            document.getElementById('score').value = savedData.score;
            document.getElementById('newsletter').checked = savedData.newsletter;
            document.getElementById('privacy').checked = savedData.privacy;
            document.getElementById('review').value = savedData.review;
        }
    }

    loadFormData();

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            form.classList.add('was-validated');

            if (confirm('Are you sure you want to submit this?')) {
                localStorage.setItem('submittedName', document.getElementById('name').value); // to save the name separately for the thank you page
                localStorage.removeItem('reviewFormData'); // Clear the saved data on successful submission
                window.location.href = 'thankyou.html';
            }
        }
    }, false);

    form.addEventListener('change', saveFormData, false);
});
