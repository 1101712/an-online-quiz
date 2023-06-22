// There are four main classes in the test -Quiz, Question, Answer, Result.
const question_textElem = document.getElementById("question_text");
const buttonsElem = document.getElementById("buttons");
const countElem = document.getElementById("count");

// Class Quitz
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

        // If at least one point is added, we assume that the answer is correct
        if (value >= 1) {
            correct = index;
        }
        else {
            // Otherwise, find which answer could be correct
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

    