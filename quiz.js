//This is a comment in JavaScript

const quizContainer = document.getElementById('quiz');

const resultsContainer = document.getElementById('results');

const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
    question: 'Georgia studies what area of Astrophysics?',
    answers: {
        a: 'Gravitational Waves',
        b: 'Galaxy Evolution',
        c: 'Black Holes and AGN',
        d: 'Stellar and Planetary Science'
    },
    correctAnswer:'b'
    },
    {
    question: 'Georgia currently studies where?',
    answers: {
        a: 'QUT',
        b: 'UQ',
        c: 'Swinburne',
        d: 'USQ'
    },
    correctAnswer:'a'
    },
    {
    question: 'Georgia is familiar with which types of code?',
    answers: {
        a: 'Python',
        b: 'MATLAB',
        c: 'HTML',
        d: 'All of the above'
    },
    correctAnswer:'d'  
    },
    {
    question: 'Georgia has worked with astonomers in which university?',
    answers: {
        a: 'USQ',
        b: 'Swinburne',
        c: 'Macquarie/AAO',
        d: 'All of the above'
        },
        correctAnswer:'d'
    }
];

function buildQuiz(){
    // Variable to store the HTML output
    const output = [];

    for (i=0;i<quizQuestions.length;i++){
    // Variable to store the list of possible answers 
    const answers = [];

    // For each available answer to this question, add a html radio button
    for (letter in quizQuestions[i].answers){
        answers.push(
            '<label>'+'<input type="radio" name="question'+i+'" value="'+letter+'">'
            +letter+':'
            +quizQuestions[i].answers[letter]
            +'</label>'
        );
    }
    // Add this question and its answers to the output
    output.push(
        '<div class="question">'+quizQuestions[i].question+'</div>'
        +'<div class="answers">'+answers.join('')+'</div>'
    );
    }
    // Combine our input list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');


}

function showResults(){
    // Gather answer containers from our quiz 
    var answerContainers = quizContainer.querySelectorAll('.answers');
    
    // Keep track of user's answers 
    var numCorrect = 0;

    // For each question...
    for(i=0;i<quizQuestions.length;i++){
        // Find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

        // If the answer is correct
        if(userAnswer===quizQuestions[i].correctAnswer){
            // Add to the number of correct answers 
            numCorrect++;

            // Colour the answers green 
            answerContainers[i].style.color = 'lightgreen';
        }

        // If the answer is incorrect
        else{
            // Colour the answers red 
            answerContainers[i].style.color = 'red';
        }
    }

    if (numCorrect===0){
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
    }

    if (numCorrect===1){
        resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
    }

    if (numCorrect===2){
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
    }

    if (numCorrect===3){
        resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Georgia pretty well!";
    }

    if (numCorrect===4){
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Georgia so well!";
    }
}

// Call the quiz!
buildQuiz();

submitButton.onclick = function(){
    showResults();
}