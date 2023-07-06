// global values
let wrongAnswerFound = false
let returnAnswerToWrongQuestionsCon = document.createElement('div')
returnAnswerToWrongQuestionsCon.setAttribute('class', 'wrongQuestionsContainer')
returnAnswerToWrongQuestionsCon.setAttribute('id', 'wrongQuestionsContainer')

function scoreResultMessage(userScore){
    if(userScore === 12){ return 'A Perfect Score'}
    if(userScore < 11 &&  userScore >= 9){ return 'A Great Score'}
    if(userScore < 9 && userScore >= 7){ return 'Good Score'}
    if(userScore < 7 && userScore >= 4){ return 'Not a score Bad'}
    if(userScore < 4){ return 'Terrible Score'}
}

function showResults(AnswersList, QandAList){
    formConatiner.style.display = 'none'
    questionContainer.style.display = 'none'
    let endOfMessageQuiz = document.createElement('p'), userScore = document.createElement("p")
    showUserQuizResults.setAttribute("id", "userQuizResults")
    showUserQuizResults.setAttribute("class", "userQuizResults")
    userScore.setAttribute("id", "userScore")
    let overAllScore = 0
    for(let i = 0; i < QandAList.length; i++){if(QandAList[i]['AnswerIndex'] === AnswersList[i]){overAllScore++}}
    userScore.textContent = `${overAllScore} / 12`
    endOfMessageQuiz.textContent = scoreResultMessage(overAllScore)
    showUserQuizResults.appendChild(userScore)
    showUserQuizResults.appendChild(endOfMessageQuiz)
    showUserQuizResultsContainer.appendChild(showUserQuizResults)
    document.body.appendChild(showUserQuizResultsContainer)
    document.body.appendChild(returnHomeButtonContainer)
}

function displayTitleOfWrongList(){
    let titleWrongUserAnswersCon = document.createElement('div'), titleWrongUserAnswers = document.createElement('h3')
    titleWrongUserAnswersCon.setAttribute('id', 'titleWrongUserAnswersCon')
    titleWrongUserAnswersCon.setAttribute('class', 'titleWrongUserAnswersCon')
    titleWrongUserAnswers.setAttribute('id', 'titleWrongUserAnswers')
    titleWrongUserAnswers.setAttribute('class', 'titleWrongUserAnswers')
    titleWrongUserAnswers.textContent = 'Where did you go Wrong?'
    titleWrongUserAnswersCon.appendChild(titleWrongUserAnswers)
    document.body.appendChild(titleWrongUserAnswersCon)
}



function displayWrongQuestion(askedQuestion, userAnswerGiven, storedCorrectAnswer, explanation){
            wrongAnswerFound = true
            let answerExspandedContaner = document.createElement('div'), answerBorderBreak = document.createElement('div')
            answerExspandedContaner.setAttribute('class', 'answerContainer')
            answerExspandedContaner.setAttribute('id', 'answerContainer')
            answerBorderBreak.setAttribute('class', 'answerBorderBreak')
            let answerShownToUsers = document.createElement('p'), answerExspandedText = document.createElement('p')
            let userAnswer = document.createElement('p'), corrertAnswer = document.createElement('p')
            answerShownToUsers.innerHTML = `<b>Question Asked:</b> ${askedQuestion}`
            userAnswerGiven === undefined ? userAnswer.textContent = "You skiped this Question" : userAnswer.innerHTML = `<b>Your answer</b> : ${userAnswerGiven}`
            corrertAnswer.innerHTML = `<b>Correct answer</b> : ${storedCorrectAnswer}`
            answerExspandedText.innerHTML = `<b>Explanation</b> : ${explanation}`
            answerExspandedContaner.appendChild(answerShownToUsers)
            answerExspandedContaner.appendChild(userAnswer)
            answerExspandedContaner.appendChild(corrertAnswer)
            answerExspandedContaner.appendChild(answerExspandedText) 
            answerExspandedContaner.appendChild(answerBorderBreak) 
            returnAnswerToWrongQuestionsCon.appendChild(answerExspandedContaner)
}


function showWrongQuestionsList(AnswersList, QandAList){
    for(let i = 0; i < AnswersList.length; i++){
        if(AnswersList[i] !== QandAList[i]['AnswerIndex'] && !Array.isArray(QandAList[i]['AnswerIndex'])){
            let userIndexAnswer = AnswersList[i], storedAnswer = QandAList[i]['AnswerIndex']
            displayWrongQuestion(QandAList[i]['questionString'], QandAList[i]['arrayOfAnswers'][userIndexAnswer], QandAList[i]['arrayOfAnswers'][storedAnswer], QandAList[i]['explanationToIncorrectAns'])
        } else if(Array.isArray(QandAList[i]['AnswerIndex'])){
            let userAnswerString = "", storedAnswerString = ""
            storedAnswerString = QandAList[i]['AnswerIndex'].map((item) => QandAList[i]['arrayOfAnswers'][item]).join(', ')
            userAnswerString = AnswersList[i].map((item) => QandAList[i]['arrayOfAnswers'][item]).join(', ')
            if(storedAnswerString !== userAnswerString){
                displayWrongQuestion(QandAList[i]['questionString'], userAnswerString, storedAnswerString, QandAList[i]['explanationToIncorrectAns'])
            }
        }
    }

    if(wrongAnswerFound){ displayTitleOfWrongList() }

    document.body.appendChild(returnAnswerToWrongQuestionsCon)

}