document.addEventListener('DOMContentLoaded', function() {
    var score = localStorage.getItem('userScore'); // Correctly retrieving the score
    document.getElementById('userScore').textContent = score; // Displaying the score
});