
let indexAnswer = 0

let selectedQuestion 

let userAnswersArray = []

//Stored answers and questions 
// let storedAnswersAndQuestions 

// access main question area

let MainQuizForm = document.getElementById('mainQuizForm')
let getQuestionsBox = document.getElementById("questionBox")
let form = document.getElementById('mainQuizForm')

let formConatiner = document.getElementById('formContainer')

let questionContainer = document.getElementById('questionContainer')

// 
let startBtnContainer = document.getElementById('startBtnContainer')
let startQuizBtn = document.getElementById('startQuizBtn')

let indexInformationContainer = document.getElementById('indexInformationContainer')

// create element 

let showUserQuizResultsContainer = document.createElement("div")
showUserQuizResultsContainer.setAttribute('class', 'showUserQuizResultsContainer')
showUserQuizResultsContainer.setAttribute('id', 'showUserQuizResultsContainer')


let showUserQuizResults = document.createElement("div")
let submitAnswerContaner = document.createElement('div')

// return home button

let returnHomeButtonContainer = document.createElement('div')
let returnHomeButton = document.createElement('button')



returnHomeButtonContainer.setAttribute('class', 'returnHomeButtonContainer')
returnHomeButtonContainer.setAttribute('id', 'returnHomeButtonContainer')
returnHomeButton.setAttribute('class', 'returnHomeBtn')
returnHomeButton.setAttribute('id', 'returnHomeBtn')
returnHomeButton.setAttribute('onclick', 'displayHomePage()')
returnHomeButton.textContent = 'Return Home'

let restartQuiz = document.createElement("button")
restartQuiz.setAttribute('onclick', 'reStartQuiz()')
restartQuiz.setAttribute('class', 'reStartQuizBtn')
restartQuiz.textContent = 'Restart Quiz'

// change the name of returnHomeButtonContainer
returnHomeButtonContainer.appendChild(returnHomeButton)
returnHomeButtonContainer.appendChild(restartQuiz)

submitAnswerContaner.setAttribute('class', 'nextQuestionContaner')

// first funaction
function displayQuestionText(question="no question found", index){
    let newQuestion = document.createElement("p")
    newQuestion.setAttribute('class', 'question')
    newQuestion.innerHTML = question[index]['questionFireOfLondon']
    getQuestionsBox.appendChild(newQuestion)
}

function displayQuestionNumber(AnswersList, index){
    let indexQuestionPlace = document.createElement("p")
    indexQuestionPlace.innerText = `Question ${AnswersList[index]['index']}`
    getQuestionsBox.appendChild(indexQuestionPlace)
}


// loop through all potenal answers

function displayAnswersToQuestions(AnswersList, index){
    for(let i = 0; i < AnswersList[index]['arrayOfAnswers'].length; i++){

        let newQuestionDiv = document.createElement("div") 
        let newInput = document.createElement("input")
        let newLabel = document.createElement('label')

        newQuestionDiv.setAttribute("class", "answerOpation")
        newQuestionDiv.setAttribute("id", "answerOpation")

        newInput.setAttribute("value", i)
        newInput.setAttribute("type", "radio")
        newInput.setAttribute("name", "answer")
        newInput.setAttribute("onclick", 'handleClick(event)')
        
        newLabel.innerHTML = AnswersList[index]['arrayOfAnswers'][i]

        newQuestionDiv.appendChild(newInput)
        newQuestionDiv.appendChild(newLabel)
        MainQuizForm.appendChild(newQuestionDiv)
    }

    // <button type="submit" form="mainQuizForm" id="nextQuestionBtn">Next Question</button> 
    
    let submitAnswerBtn = document.createElement('button')
    submitAnswerBtn.setAttribute('form', 'mainQuizForm')
    submitAnswerBtn.setAttribute('type', 'submit')

    submitAnswerBtn.setAttribute('id', 'nextQuestionBtn')
    submitAnswerBtn.setAttribute('class', 'nextQuestionBtn')
    submitAnswerBtn.textContent = 'Next Question'
    submitAnswerContaner.appendChild(submitAnswerBtn)
    document.body.appendChild(submitAnswerContaner)

}


// deletes all child elements in the MainQuiz div
function deleteOldQuestions(){

    while(submitAnswerContaner.lastChild){
        submitAnswerContaner.removeChild(submitAnswerContaner.lastElementChild)
    }

    while(MainQuizForm.lastElementChild){
        MainQuizForm.removeChild(MainQuizForm.lastElementChild)
    }

    while(getQuestionsBox.lastElementChild){
        getQuestionsBox.removeChild(getQuestionsBox.lastElementChild)
    }

}

function getUserAnwser(event){
    event.preventDefault();
    console.log(selectedQuestion, 'pushed saved value')
    userAnswersArray.push(selectedQuestion)
    selectedQuestion = null
    nextQuestion()
}

function handleClick(event){
    selectedQuestion = Number(event.target.value)
}


function nextQuestion(){ 
    // chnage the 11 to value of the array of questions 
        if(indexAnswer < 11){
            deleteOldQuestions()
            indexAnswer++
            displayQuestionNumber(storedAnswersAndQuestions, indexAnswer)
            displayQuestionText(storedAnswersAndQuestions, indexAnswer)
            displayAnswersToQuestions(storedAnswersAndQuestions, indexAnswer)
        } else {
            deleteOldQuestions()
            showResults(userAnswersArray, storedAnswersAndQuestions)
            displayTitleOfWrongList()
            showWrongQuestionsList(userAnswersArray, storedAnswersAndQuestions)
            let nextQuestionBtn = document.getElementById('nextQuestionBtn')
            nextQuestionBtn.remove()
        }
  
}

function startQuiz(){

    startQuizBtn.style.display = 'none'
    startBtnContainer.style.display = 'none'
    indexInformationContainer.style.display = 'none'

    formConatiner.style.display = 'flex'
    questionContainer.style.display = 'flex'

    displayQuestionNumber(storedAnswersAndQuestions, indexAnswer)
    displayQuestionText(storedAnswersAndQuestions, indexAnswer)
    displayAnswersToQuestions(storedAnswersAndQuestions, indexAnswer)
}

function removeRightAnswers(){
    let wrongQuestionsContainer = document.getElementById('wrongQuestionsContainer')
    let titleWrongUserAnswersCon = document.getElementById('titleWrongUserAnswersCon')
    titleWrongUserAnswersCon.remove()
    wrongQuestionsContainer.remove()
    showUserQuizResultsContainer.remove()
}

function reStartQuiz(){

    formConatiner.style.display = 'flex'
    questionContainer.style.display = 'flex'

    while(showUserQuizResults.lastElementChild){
        showUserQuizResults.removeChild(showUserQuizResults.lastElementChild)
    }

    indexAnswer = 0, userAnswersArray = []
    returnHomeButtonContainer.remove()
    removeRightAnswers()
    startQuiz()
}

// delete the users score from the test
function deleteUserScore(){
    while(showUserQuizResults.lastElementChild){
        showUserQuizResults.removeChild(showUserQuizResults.lastElementChild)
    }

    returnHomeButtonContainer.remove()
}

function displayHomePage(){
    deleteUserScore()
    removeRightAnswers()
    indexAnswer = 0, userAnswersArray = []
    startQuizBtn.style.display = 'block'
    startBtnContainer.style.display = 'flex'
    indexInformationContainer.style.display = 'flex'
}

// somthing is wrong county the user anwsers to the. 
