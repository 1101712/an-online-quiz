# online-quiz

## overview

This project is a web-based logic quiz designed to test users' logical and reasoning skills. Users can interact with the quiz with a series of logic-based questions, answer questions, view the rules, and provide feedback. Each question has multiple-choice answers. The quiz keeps track of the user's score and displays a result at the end based on the user's score. The user interface is updated as the user progresses through the quiz.<br>
Furthermore, the last part of the script is for a star-rating feedback system. It listens for click events on each star and updates the visual display of the stars and a hidden input value accordingly. This feedback system allows users to rate the quiz after completing it.

![This is a screenshot of pages of the website](assets/images/screens.jpg "This are screenshots of pages of the website")

## Features

- Home Page: The home page introduces users to the quiz and allows them to begin testing their logic.
- Rules Page: On the Rules page, users can familiarize themselves with the structure of the quiz, how to answer questions, the scoring system, and the results presentation.
- Feedback Page: The Feedback page provides users with a way to leave star ratings and text feedback about their experience with the quiz.

## Existing Features

- Navigation Bar
  - Featured on all three page and is identical in each page to allow for easy navigation.
  - This section will allow users to easily navigate with all devices without having to revert to the previous page via the "back" button.
- Logic Quiz
  - The core feature of this application is a logic quiz. It is designed with various logical questions that test the user's ability to deduce and infer from the given information.
- Multiple Choice Questions
  - Each question in the quiz is a multiple-choice question. Users can choose one of the given options as their answer.
- Automated Scoring
  - The application calculates the user's score automatically. Points are awarded for each correct answer and added to the user's total score.
- Dynamic Quiz Progression
  - As the user goes through the quiz, the user interface updates dynamically. The current question and multiple-choice options are displayed, and the question count is updated.
- Answer Validation
  - Once a user selects an answer, the app validates the answer. If the answer is correct, it is highlighted in green, and if the answer is incorrect, it is highlighted in red. The correct answer is also revealed if the user gets the question wrong. ![This is a screenshot of a page of the website](assets/images/medium_screen.jpg "This is a screenshot of a page of the website") ![This is a screenshot of a page of the website](assets/images/answers.jpg "This is a screenshot of a page of the website")
- End-of-Quiz Results
  - At the end of the quiz, a result is displayed based on the user's total score. There are different results depending on the range in which the user's score falls.![This is a screenshot of a page of the website](assets/images/result.jpg "This is a screenshot of a page of the website")
- Interactive Star Rating Feedback System ![This is a screenshot of a page of the website](assets/images/feedback_completed.jpg "This is a screenshot of a page of the website")
  - After completing the quiz, users can provide feedback by giving a star rating. The rating system is interactive, with the stars changing color when clicked. The submitting page opens in a new window. ![This is a screenshot of a page of the website](assets/images/data.jpg "This is a screenshot of a page of the website")
- Responsive Design
  - The quiz application is designed to work seamlessly across different device sizes and orientations, making it accessible to users on desktops, tablets, and smartphones.
- Clean, User-Friendly Interface
  - The application boasts a clean, intuitive interface that makes it easy for users to navigate through the quiz and understand how to interact with the application.

## UX

- Easy to Start
  - As soon as a user arrives at the application, they are greeted with the first question of the quiz, along with multiple-choice options. There's no need to navigate through menus or click a 'start' button, which provides a seamless start to the experience.
- Clear Feedback
  - After selecting an answer, users are immediately provided with feedback. Correct answers are highlighted in green and incorrect answers in red, making it clear whether they answered correctly or not. This instant feedback helps users learn from any mistakes and enhances the learning experience.
- Progress Tracking
  - Users are kept informed of their progress throughout the quiz. A counter displays the current question number and the total number of questions, letting users know how far they have progressed and how many questions remain.
- Result Explanation
  - At the end of the quiz, users are provided with a result based on their score. This result includes a brief explanation, providing users with a satisfying conclusion to the quiz and a sense of achievement.
- Interactive Rating System
  - After completing the quiz, users are invited to rate their experience. They can do this by clicking on the star icons, which change color upon selection, providing visual feedback and a satisfying, interactive experience.
- Responsive Design
  - Whether users are accessing the quiz on a desktop, tablet, or smartphone, the application adapts to their device. The responsive design ensures that users have a positive experience, regardless of the device they are using.
- Clean, Intuitive Interface
  - The application features a clean, minimalistic design, free of distractions. The user interface is intuitive, with a clear layout and easy-to-read text, making it accessible to users of all ages and technical abilities.

### Site goals

The main goal of our Quiz App is to provide an interactive, engaging, and fun platform where users can challenge their logical thinking and general knowledge. We believe that learning can be exciting, and with our Quiz App, users can enhance their skills while also having a fun and enjoyable experience.

This application is designed with the intention to cater to a wide range of audiences, from students seeking a study break, to adults who wish to enjoy a brief respite from their daily routines, or those who simply enjoy testing their knowledge on a variety of topics.

Additionally, the Quiz App encourages repeat visits with its robust array of questions and intuitive interface, thereby enhancing user engagement. The scoring system and result feedback provide a competitive edge, prompting users to strive for improvement.

The intuitive star rating system for user feedback also helps us understand user experience, making it a useful tool to continuously improve and update the application, ensuring that it consistently meets and exceeds user expectations.

## Compatibility and Responsiveness Testing:

- The site was tested across multiple browsers (Chrome, Firefox, Edge) and on different devices (Desktop, Tablet, Mobile) to ensure compatibility and responsiveness. Although testing on Safari was not possible due to lack of access to compatible devices, the site adheres to modern standards and practices, making it highly likely to work well on Safari too."

- HTML

  - No errors were found when passing through the [official W3C validator](https://validator.w3.org/).

- CSS
  - No errors were found when passing through the [official Jigsaw validator](http://jigsaw.w3.org/css-validator/validator?lang=de&profile=css3svg&uri=https%3A%2F%2F8000-1101712-lucid-dreaming-o-ubdmkv1q76.us2.codeanyapp.com%2F&usermedium=all&vextwarning=&warning=1)
- JavaScript
  - No errors were found when passing through the [official JavaScript validator](https://jshint.com/).

* Accessibility
  - I confirmed that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in devtools
    ![This is a screenshot of a page of the website](assets/images/lighthouse-quiz.jpg "This is a screenshot of page of the website")

## Manual testing

Manual testing of all links and necessary features was done in previously mentioned browsers and devices with a positive result. All pages linked correctly, all features worked correctly, feedback submits in new window.
| Feature | Expect | Action | Result |
|---------|--------|--------|--------|
| Home navigation | When clicked the home page will open | Clicked Home on the Nav bar | Home page opened when clicked |
| Feedback submit button | When submit button is clicked. The result opens in new window | Clicked the submit button on the form. | The form successfully submitted on click. The result opened in new window |
| Quiz answer buttons | When clicked, the quiz starts | Clicked the Quiz answer buttons | Quiz started successfully |
| Quiz questions | The user is presented with a new question after answering the previous one | Answered a question in the quiz | The next question appeared |
| Quiz results | After completing the quiz, the user is presented with their score | Completed the quiz | The user's score was displayed correctly |
| Mobile Responsiveness | Site should be fully responsive on mobile devices | Tested site on different mobile devices | Site is fully responsive and functional on mobile devices |

## Manual testing of user stories

### Expectation

A visitor wants to test their logic skills.

### Result

As a visitor, I found a variety of logic questions in the quiz which tested my thinking skills.

### Expectation

A visitor wants to know their score after completing the quiz.

### Result

As a visitor, I was given a score at the end of the quiz which gave me insight into my performance.

### Expectation

A visitor wants to provide feedback about the quiz.

### Result

As a visitor, I found a simple and intuitive form that allowed me to rate the quiz and leave comments.

### Expectation

A visitor wants to know the rules of the quiz before starting.

### Result

As a visitor, I found clear instructions about the quiz rules on the home page which helped me understand how to interact with the quiz.

### Expectation

A visitor expects to have fun while interacting with the quiz.

### Result

As a visitor, I found the quiz to be engaging and challenging, making it a fun experience for me.

## Deployment

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the GitHub Repository;
2. At the top of the Repository itself, locate the "Setting" button on the menu;
3. In the Settings page choose the "GitHub Pages" Section;
4. In the "GitHub Pages", under "Source", click the dropdown called "None" and select the "Master
   Branch". The page should refresh automatically;
5. Scroll down the page to locate the now published site link in the "GitHub Pages" section.

## Credits

### Content

- The text-content of questions and unswers for logic-quiz was generatet by Openais ChatGPT.
- The rest of the text including the rules was composed by me and is my intellectual property.
- The idea how to develop an online quiz was taken from [e-kucheriavyi](https://github.com/evgeniikucheriavii/JS-quizes)
- The instruction how to create a star-rating feedback was taken from [learningrobo.com](https://www.learningrobo.com/2021/09/responsive-feedback-form-with-star.html)
- The instruction how to creat README file was taken from CodeInstitute Educational materials. [CodeInstituteREADME template](https://github.com/Code-Institute-Solutions/readme-template), Codeinstitute README presentation and [markdownlivepreview](https://markdownlivepreview.com/).
- This reference list would not be complete without mentioning the beginner resourses for front-end at
  [W3Schools](https://w3schools.com)
- And extensive notes and tips hosted at the [Mozilla Foundation](developer.mozilla.org), the home of the worlds' best web browser Firefox.
- And, of course, a thanks goes
  to the friendly part of the [StackOverFlow](https://stackoverflow.com), for helping to pinpoint and fix the
  little bugs and features in my code.
- I would like to acknowledge the resources provided by [Openais ChatGPT](https://chat.openai.com/?model=gpt-4), which was invaluable for problem-solving and getting suggestions throughout the development process.

### Media

- All the screenshots for the README documentation were self-created and taken from the website during the different stages of development.

### Languages used

- [HTML5](https://de.wikipedia.org/wiki/HTML5)
- [CSS3](https://www.w3.org/Style/CSS/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Frameworks, Libraries & Programs used

- [Google Fonts](https://fonts.google.com/specimen/PT+Sans)

  - The "Google fonts" tool was used to impoirt the fonts into the style.css file, which is used in this project.

- [PT Font Family](https://company.paratype.com/pt-sans-pt-serif)

  - The fonts from the PT Family were chosed to make the website futureproof. As already mentioned, I
    plan on adding multilanguage support to this project, and the Paratype fonts are built around non-latin
    characters, such as the Cyrillic alphabet and special charachters used in post-Soviet countries, which
    are very rare to find in fonts produced in the anglophone world. While dealing with an impressive amount
    of letters from different language families, the PT font never compromises on aestetics - it has been
    created by the internationally acclaimed typeface designer [Alexandra Korolkova](https://en.wikipedia.org/wiki/Alexandra_Korolkova) and Olga Umpelova.
    However, should the project grow big enough to be translated into east-Asian or south-Asian languages,
    new fonts shall be added to support, for example, Japanese or Thai fonts.

- [jQuery](https://jquery.com/)

  - jQuery was used for handling certain interactive elements on the site and for making AJAX calls.

- [GitHub](https://github.com/)

  - GitHub was used for version control and for hosting the project's repository.

- [GitPod](https://www.gitpod.io/)

  - GitPod was used as the development environment where the website was built.

- [Bootstrap](https://getbootstrap.com/)

  - Bootstrap was used to provide responsive design and layout for the website.

- [Font Awesome](https://fontawesome.com/)
  Font Awesome was used to add icons for improved user interface design and UX.

## Acknowledgements

- to Kay Welfare for great psyhological support and motivation.
- to my mentor Antonio Rodriguez for helping to resolve the technical questions.
- I would like to mentions Openais ChatGPT, which gave me a huge opportunity to study quick and very efficient.
