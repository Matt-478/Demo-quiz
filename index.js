

function buildQuiz() {
  const output = []

  questionsArray.forEach((currentQuestion, questionNumber) => {
    const answers = []
    

    for(letter in currentQuestion.options){
        // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} : 
              ${currentQuestion.options[letter]}
            </label>`
            // ${currentQuestion.answers[letter]}
          )
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join('')} </div>`
        )
      }
    )

    // console.log(output[0])
    quizContainer.innerHTML = output.join('');
  }

// function showResults() {
// }

const quizContainer = document.getElementById("quiz")
const resultsContainer = document.getElementsByClassName("results")
const submitButton = document.getElementById("submit")
const questionsArray = [
  {
    question: "Which year was the great London fire in?",
    options: {
      a: "1965",
      b: "1666",
      c: "1866"
    },
    rightAnswer: "b"
  },
  {
    question: "Who invented JavaScript?",
    options: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    rightAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    options: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS"
    },
    rightAnswer: "c"
  }
]

buildQuiz()
quizContainer.innerHTML = output

submitButton.addEventListener('click', showResults)