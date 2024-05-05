// Student ID 201691778, Reem Almutairi
// this function is set to calculate the score of the quiz
function calculateScore() {
    var score = 0;
    var correctAnswers = {
        question1: 'Totem',
        question2: 'Magic',
        question4: 'TARS',
        question5: 'Harvey Dent',
        question6: 'Memento',
        question7: 'Dunkirk',
        question8: 'Inception',
        question9: 'Inverted',
        question10: 'Jeremy Theobald'
    };
    

    // Iterating over each property in correctAnswers
    Object.keys(correctAnswers).forEach(function(question) {
        var radios = document.getElementsByName(question);
        // Check each radio button in the current group
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked && radios[i].value === correctAnswers[question]) {
                score++; // Increment score if correct
                break; // Exit loop after finding checked item
            }
        }
    });

    localStorage.setItem('userScore', score); // Save score to localStorage
    window.location.href = 'score.html'; // Redirect to the score page
    return false; // Prevent default form submission
}
