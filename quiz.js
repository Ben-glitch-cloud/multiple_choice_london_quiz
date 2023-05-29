// main file for Multiple Choice Quiz funations 

// file of questions 
let arrayOfAnswers = ["1567", "1665", "1666", "1731"]

// first question
let questionFireOfLondon = "What year did the create fire of London start?"

// access main question area
let MainQuizForm = document.getElementById('mainQuizForm')

// first funaction
function displayQuestion(question="no question found"){
    let getQuestionsBox = document.getElementById("questionBox")
    let newQuestion = document.createElement("p")
    newQuestion.innerHTML = question
    getQuestionsBox.appendChild(newQuestion)
}

displayQuestion(questionFireOfLondon)

// loop through all potenal answers

function displayAnswersToQuestions(AnswersList){
    for(let i = 0; i < AnswersList.length; i++){

        let newQuestionDiv = document.createElement("div") 
        let newInput = document.createElement("input")
        let newLabel = document.createElement('label')

        newQuestionDiv.setAttribute("class", "questionFour")
        newInput.setAttribute("type", "checkbox")
        newLabel.innerHTML = AnswersList[i]

        newQuestionDiv.appendChild(newInput)
        newQuestionDiv.appendChild(newLabel)

        MainQuizForm.appendChild(newQuestionDiv)
    }
}

displayAnswersToQuestions(arrayOfAnswers)

