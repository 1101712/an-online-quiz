document.addEventListener("DOMContentLoaded", function () {

    /*jshint esversion: 6 */
    /*jshint esversion: 8 */
    // feedback
    var stars = document.querySelectorAll('.star');
    var ratingInput = document.getElementById('star-rating');

    stars.forEach(function (star) {
        star.addEventListener('click', function () {
            var value = this.getAttribute('data-value'); // get the data-value attribute

            // loop through all the stars
            stars.forEach(function (star) {
                if (star.getAttribute('data-value') <= value) {
                    star.classList.remove('far'); // remove far class
                    star.classList.add('fas'); // add fas class
                } else {
                    star.classList.remove('fas'); // remove fas class
                    star.classList.add('far'); // add far class
                }
            });
            ratingInput.value = value; // update the input value
        });
    });

    // Email validation
    document.getElementById('feedback-form').addEventListener('submit', function (event) {
        // Prevent the form from submitting normally
        event.preventDefault();

        var emailInput = document.getElementById('email');
        var emailError = document.getElementById('email-error');
        var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        if (emailInput.value === "") {
            // No email provided
            emailError.textContent = "Please provide an email.";
        } else if (!emailRegex.test(emailInput.value)) {
            // Invalid email
            emailError.textContent = "Please provide a valid email.";
        } else {
            // Valid email
            emailError.textContent = "";
            this.submit();
        }
    });
    // There are four main classes in the test - Quiz, Question, Answer, Result.
    const question_textElem = document.getElementById("question_text");
    const buttonsElem = document.getElementById("buttons");
    const countElem = document.getElementById("count");

    // Class Quiz
    class Quiz {
        constructor(questions, results) {

            this.questions = questions; // Array of questions
            this.results = results; // Array of possible results
            this.score = 0; // Total score
            this.result = 0; // Index of the result from the array
            this.current = 0; // Current question number
        }

        Click(index) {
            // Add points
            let value = this.questions[this.current].Click(index);
            this.score += value;
            let correct = -1;

            // If at least one point is added, the answer is correct
            if (value >= 1) {
                correct = index;
            }
            else {
                // Otherwise, find correct answer
                for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                    if (this.questions[this.current].answers[i].value >= 1) {
                        correct = i;
                        break;
                    }
                }
            }
            this.Next();
            return correct;
        }

        // Move to the next question
        Next() {
            this.current++;
            if (this.current >= this.questions.length) {
                this.End();
            }
        }

        // If there are no more questions, check the user's result
        End() {
            for (let i = 0; i < this.results.length; i++) {
                if (this.results[i].Check(this.score)) {
                    this.result = i;
                }
            }
        }
    }

    // Class for Questions
    class Question {
        constructor(text, answers) {
            this.text = text;
            this.answers = answers;
        }
        Click(index) {
            return this.answers[index].value;
        }
    }

    // Class for Answers
    class Answer {
        constructor(text, value) {
            this.text = text;
            this.value = value;
        }
    }

    // Class for Result
    class Result {
        constructor(text, value) {
            this.text = text;
            this.value = value;
        }

        // check if the user has scored enough points
        Check(value) {
            if (this.value <= value) {
                return true;
            }
            else {
                return false;
            }
        }
    }

    // Array of results
    const results =
        [
            new Result("Do not worry, you might just need some rest", 0),
            new Result("You have something to strive for", 3),
            new Result("Your logic is above average", 6),
            new Result("Your logic is impeccable!", 9)
        ];

    // Array of questions
    const questions =
        [
            new Question("If all roses are flowers and some flowers are red, then:",
                [
                    new Answer("All roses are red", 0),
                    new Answer("Some roses are red", 1),
                    new Answer("No roses are red", 0),
                    new Answer("None of the above", 0)
                ]),
            new Question("If you take away two from five, what are you left with?",
                [
                    new Answer("Two", 0),
                    new Answer("Three", 1),
                    new Answer("Five", 0),
                    new Answer("Four", 0)
                ]),
            new Question("If some A are B, and all B are C, then:",
                [
                    new Answer("Some A are C", 1),
                    new Answer("All A are C", 0),
                    new Answer(" Some C are not A", 0,),
                    new Answer("None of the above", 0,)
                ]),
            new Question("Which shape does not belong: Rhombus, Rectangle, Square, Circle?",
                [
                    new Answer("Rhombus", 0),
                    new Answer("Rectangle", 0),
                    new Answer("Square", 0),
                    new Answer("Circle", 1)
                ]),
            new Question("A farmer had 15 sheep, and all but 8 died. How many are left?",
                [
                    new Answer("7", 0),
                    new Answer("8", 1),
                    new Answer("0", 0),
                    new Answer("15", 0)
                ]),
            new Question("If some S are P, and all P are M, then:",
                [
                    new Answer("All S are M", 0),
                    new Answer("Some S are not M", 0),
                    new Answer("Some M are S", 1),
                    new Answer("All M are S", 0)
                ]),
            new Question("Tom's mother has three children. The first is named April, the second is named May. What is the name of the third child?",
                [
                    new Answer("June", 0),
                    new Answer("Tom", 1),
                    new Answer("Anna", 0),
                    new Answer("March", 0)
                ]),
            new Question("If a red house is made of red bricks, and a blue house is made of blue bricks, what is a greenhouse made of?",
                [
                    new Answer("Green bricks", 0),
                    new Answer("Glass", 1),
                    new Answer("Plants", 0),
                    new Answer("None of the above", 0)
                ]),
            new Question("There's a one-story house where everything is yellow. The walls are yellow, the doors are yellow, even all the furniture is yellow. What color are the stairs?",
                [
                    new Answer("Yellow", 0),
                    new Answer("There are no stairs, it's a one-story house", 1),
                    new Answer("The color is not specified", 0),
                    new Answer("None of the above", 0)
                ])
        ];
    // The quiz 
    const quiz = new Quiz(questions, results);
    if (question_textElem !== null) {
        // use question_textElem here
        Update();
    }

    // Update the quiz
    function Update() {
        if (quiz.current < quiz.questions.length) { // Check if there are still questions
            question_textElem.innerHTML = quiz.questions[quiz.current].text; // If yes, change the question in the title
            buttonsElem.innerHTML = ""; // Remove last answer options
            for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) { // Create buttons for new answer options
                let btn = document.createElement("button");
                btn.className = "button";
                btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
                btn.setAttribute("index", i);
                buttonsElem.appendChild(btn);
            }
            countElem.innerHTML = (quiz.current + 1) + " from  " + quiz.questions.length; // Display the current question number

            // Call a function that will attach events to the new buttons
            Init();
        }
        else {
            // If this is the end, then display the result
            buttonsElem.innerHTML = "";
            question_textElem.innerHTML = quiz.results[quiz.result].text;
            countElem.innerHTML = "Points: " + quiz.score + "/9";
        }
    }
    function Init() {
        // Find all buttons
        let btns = document.getElementsByClassName("button");
        for (let i = 0; i < btns.length; i++) {
            // Attach an event to each button
            // The Click() function is called when the button is clicked
            btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
        }
    }
    function Click(index) {
        let correct = quiz.Click(index); // Get the number of the correct answer
        let btns = document.getElementsByClassName("button"); // Find all buttons
        // Iterate over all buttons
        for (let i = 0; i < btns.length; i++) {
            // If the button matchs to the correct answer, highlight it in green
            if (i == correct) {
                btns[i].className = "button button_correct";
            }
            // If the button matchs to a wrong answer, highlight it in red
            else {
                btns[i].className = "button button_wrong";
            }
        }
        setTimeout(Update, 2500); // Wait for a second and update the quiz
    }
});