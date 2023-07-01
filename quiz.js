
// global values to be used later

let indexAnswer = 0, selectedQuestion, userAnswersArray = [], userQuizTypeSelected

const showUserQuizResultsContainer = document.createElement("div")
const showUserQuizResults = document.createElement("div")
const submitAnswerContaner = document.createElement('div')
const returnHomeButtonContainer = document.createElement('div')

// setAbttributes for elements

function addingAttributesToQuizResultsContainer(){
    showUserQuizResultsContainer.setAttribute('class', 'showUserQuizResultsContainer')
    showUserQuizResultsContainer.setAttribute('id', 'showUserQuizResultsContainer')
}

//

function addingAttributesToHomeButtonContainer(){
    returnHomeButtonContainer.setAttribute('class', 'returnHomeButtonContainer')
    returnHomeButtonContainer.setAttribute('id', 'returnHomeButtonContainer')
}

// change the name of returnHomeButtonContainer

submitAnswerContaner.setAttribute('class', 'nextQuestionContaner')

function setupRestartButton(){
    const restartQuiz = document.createElement("button")


    restartQuiz.setAttribute('onclick', 'reStartQuiz()')


    restartQuiz.setAttribute('class', 'reStartQuizBtn')
    restartQuiz.textContent = 'Restart Quiz'
    returnHomeButtonContainer.appendChild(restartQuiz)
}

function setupHomeButton(){
    const returnHomeButton = document.createElement('button')
    returnHomeButton.setAttribute('class', 'returnHomeBtn')
    returnHomeButton.setAttribute('id', 'returnHomeBtn')
    returnHomeButton.setAttribute('onclick', 'displayHomePage()')
    returnHomeButton.textContent = 'Return Home'
    returnHomeButtonContainer.appendChild(returnHomeButton)
}

// setting up home button and restart button 

// first funaction
function displayQuestionText(question="no question found", index){
    let newQuestion = document.createElement("p")
    newQuestion.setAttribute('class', 'question')
    newQuestion.innerHTML = question[index]['questionString']
    getQuestionsBox.appendChild(newQuestion)
}

function displayQuestionNumber(AnswersList, index){
    let indexQuestionPlace = document.createElement("p")
    indexQuestionPlace.setAttribute('id', 'questionIndex')
    indexQuestionPlace.innerText = `Question ${AnswersList[index]['index']}`
    getQuestionsBox.appendChild(indexQuestionPlace)
}

// loop through all potenal answers

function displayAnswersToQuestions(AnswersList, index){
    
    if(AnswersList[index]['questionType'] === 'singleChoice'){
        questionTypeQuiz(AnswersList, index)
    } else if(AnswersList[index]['questionType'] === 'multChoice') {
        multipleChoiceQuestion(AnswersList, index)
    }
    

    
    let submitAnswerBtn = document.createElement('button')
    const submitAnswerBtnObjectAttributes = {'form': 'mainQuizForm', 'type': 'submit', 'id': 'nextQuestionBtn', 'class': 'nextQuestionBtn'}

    for(const key in submitAnswerBtnObjectAttributes){
        submitAnswerBtn.setAttribute(`${key}`, `${submitAnswerBtnObjectAttributes[key]}`)
    }
    submitAnswerBtn.textContent = 'Skip Question'
    submitAnswerContaner.appendChild(submitAnswerBtn)
    document.body.appendChild(submitAnswerContaner)
}


// deletes all child elements in the MainQuiz div
function deleteOldQuestions(){
    while(submitAnswerContaner.lastChild){submitAnswerContaner.removeChild(submitAnswerContaner.lastElementChild)}
    while(MainQuizForm.lastElementChild){MainQuizForm.removeChild(MainQuizForm.lastElementChild)}
    while(getQuestionsBox.lastElementChild){getQuestionsBox.removeChild(getQuestionsBox.lastElementChild)}
}

function getUserAnwser(event){
    event.preventDefault();
    userAnswersArray.push(selectedQuestion)
    selectedQuestion = null
    nextQuestion()
}

// stores the answer with an index number
function handleSingleClick(event){
    selectedQuestion = Number(event.target.value)
    document.getElementById('nextQuestionBtn').textContent = "Next Question"
}


function nextQuestion(){ 
    console.log(userQuizTypeSelected, 'quiz')
        if(indexAnswer < userQuizTypeSelected['quizArray'].length - 1){
            deleteOldQuestions()
            indexAnswer++
            displayQuestionNumber(userQuizTypeSelected['quizArray'], indexAnswer)
            displayQuestionText(userQuizTypeSelected['quizArray'], indexAnswer)
            displayAnswersToQuestions(userQuizTypeSelected['quizArray'], indexAnswer)
        } else {
            deleteOldQuestions()
            showResults(userAnswersArray, userQuizTypeSelected['quizArray'])
            showWrongQuestionsList(userAnswersArray, userQuizTypeSelected['quizArray'])
            returnHomeBtn.style.display = 'none'
        }
  
}

function startQuiz(quizType){
    startBtnContainer.style.display = 'none'
    indexInformationContainer.style.display = 'none'
    instructions.style.display = 'none'
    formConatiner.style.display = 'flex'
    questionContainer.style.display = 'flex'
    returnHomeBtn.style.display = 'block'
    
    selectQuizType(quizType)

    displayQuestionNumber(userQuizTypeSelected['quizArray'], indexAnswer)
    displayQuestionText(userQuizTypeSelected['quizArray'], indexAnswer)
    displayAnswersToQuestions(userQuizTypeSelected['quizArray'], indexAnswer)


}

function selectQuizType(userSelectQuiz){
    if(userSelectQuiz === 1){
        userQuizTypeSelected = storedAnswersAndQuestions
    } else if(userSelectQuiz === 2){
        userQuizTypeSelected = historyOfLondonsParks
    } else {
        throw new Error("Quiz Not Found");
    }
}

function removeRightAnswers(){
    let wrongQuestionsContainer = document.getElementById('wrongQuestionsContainer')
    let titleWrongUserAnswersCon = document.getElementById('titleWrongUserAnswersCon')
    if(titleWrongUserAnswersCon){ titleWrongUserAnswersCon.remove() }
    if(wrongQuestionsContainer){  wrongQuestionsContainer.remove() }
    if(showUserQuizResultsContainer){  showUserQuizResultsContainer.remove() }
}

function reStartQuiz(){
    formConatiner.style.display = 'flex'
    questionContainer.style.display = 'flex'
    while(showUserQuizResults.lastElementChild){ showUserQuizResults.removeChild(showUserQuizResults.lastElementChild)}
    indexAnswer = 0, userAnswersArray = [], 
    returnHomeButtonContainer.remove()
    removeRightAnswers()
    // add type number in startQuiz
    if(userQuizTypeSelected['quizTitle'] === 'GernalLondonQuiz'){
        startQuiz(1)
    } else if(userQuizTypeSelected['quizTitle'] === 'HistoryOfLondonParks'){
        startQuiz(2)
    }
}

// delete the users score from the test
function deleteUserScore(){
    while(showUserQuizResults.lastElementChild){ showUserQuizResults.removeChild(showUserQuizResults.lastElementChild) }
    returnHomeButtonContainer.remove()
}

function displayHomePage(){
    deleteUserScore(), removeRightAnswers()
    indexAnswer = 0, userAnswersArray = []
    startQuizBtn.style.display = 'block'
    startBtnContainer.style.display = 'flex'
    indexInformationContainer.style.display = 'flex'
    instructions.style.display = 'block'
}

function returnHomeFromTest(){
    deleteOldQuestions()
    displayHomePage()
    returnHomeBtn.style.display = 'none'
}

addingAttributesToQuizResultsContainer()
addingAttributesToHomeButtonContainer()
setupHomeButton()
setupRestartButton()
