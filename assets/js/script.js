
// There are four main classes in the test - Quiz, Question, Answer, Result.
const question_textElem = document.getElementById("question_text");
const buttonsElem = document.getElementById("buttons");
const countElem = document.getElementById("count");

// Class Quiz
class Quiz {
    constructor(questions, results) {

        // Array of questions
        this.questions = questions;

        // Array of possible results
        this.results = results;

        // Total score
        this.score = 0;

        // Index of the result from the array
        this.result = 0;

        // Current question number
        this.current = 0;
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
        new Result("Do not worry, you might just need a rest", 0),
        new Result("You have something to strive for", 3),
        new Result("Your logic is above average", 6),
        new Result("Your logic is perfect!", 9)
    ];

