function scoreResultMessage(userScore){
    if(userScore >= 10){ return 'A Perfect Score'}
    if(userScore < 10 && userScore >= 7){ return 'Good Score'}
    if(userScore < 7 && userScore >= 4){ return 'Not a score Bad'}
    if(userScore < 4){ return 'Terrible Score'}
}

function showResults(AnswersList, QandAList){
    formConatiner.style.display = 'none'
    questionContainer.style.display = 'none'
    let endOfMessageQuiz = document.createElement('p')
    let userScore = document.createElement("p")
    showUserQuizResults.setAttribute("id", "userQuizResults")
    showUserQuizResults.setAttribute("class", "userQuizResults")
    userScore.setAttribute("id", "userScore")
    let overAllScore = 0
    for(let i = 0; i < QandAList.length; i++){
        if(QandAList[i]['AnswerIndex'] === AnswersList[i]){overAllScore++}
    }
    userScore.textContent = `${overAllScore} / 12`
    endOfMessageQuiz.textContent = scoreResultMessage(overAllScore)
    showUserQuizResults.appendChild(userScore)
    showUserQuizResults.appendChild(endOfMessageQuiz)
    showUserQuizResultsContainer.appendChild(showUserQuizResults)
    document.body.appendChild(showUserQuizResultsContainer)
    document.body.appendChild(returnHomeButtonContainer)
}

function displayTitleOfWrongList(){
    let titleWrongUserAnswersCon = document.createElement('div')
    let titleWrongUserAnswers = document.createElement('h3')
    titleWrongUserAnswersCon.setAttribute('id', 'titleWrongUserAnswersCon')
    titleWrongUserAnswersCon.setAttribute('class', 'titleWrongUserAnswersCon')
    titleWrongUserAnswers.setAttribute('id', 'titleWrongUserAnswers')
    titleWrongUserAnswers.setAttribute('class', 'titleWrongUserAnswers')
    titleWrongUserAnswers.textContent = 'Where did you go Wrong?'
    titleWrongUserAnswersCon.appendChild(titleWrongUserAnswers)
    document.body.appendChild(titleWrongUserAnswersCon)
}

function showWrongQuestionsList(AnswersList, QandAList){
    let wrongAnswerFound = false
    let returnAnswerToWrongQuestionsCon = document.createElement('div')
    returnAnswerToWrongQuestionsCon.setAttribute('class', 'wrongQuestionsContainer')
    returnAnswerToWrongQuestionsCon.setAttribute('id', 'wrongQuestionsContainer')

    for(let i = 0; i < AnswersList.length; i++){
        if(AnswersList[i] !== QandAList[i]['AnswerIndex']){
            wrongAnswerFound = true
            let userIndexAnswer = AnswersList[i]
            let answerExspandedContaner = document.createElement('div')
            let answerBorderBreak = document.createElement('div')
            answerExspandedContaner.setAttribute('class', 'answerContainer')
            answerExspandedContaner.setAttribute('id', 'answerContainer')
            answerBorderBreak.setAttribute('class', 'answerBorderBreak')
            let answerShownToUsers = document.createElement('p')
            let answerExspandedText = document.createElement('p')
            let userAnswer = document.createElement('p')
            let corrertAnswer = document.createElement('p')
            answerShownToUsers.textContent = `Question Asked: ${QandAList[i]['questionFireOfLondon']}`
            console.log(QandAList[i]['questionFireOfLondon'], 'find answer')
            if(QandAList[i]['arrayOfAnswers'][userIndexAnswer] === undefined){
                userAnswer.textContent = "You skiped this Question"
            } else {
                userAnswer.textContent = `Your answer : ${QandAList[i]['arrayOfAnswers'][userIndexAnswer]}`
            }
            let storedAnswer = QandAList[i]['AnswerIndex']
            corrertAnswer.textContent = `Correct answer : ${QandAList[i]['arrayOfAnswers'][storedAnswer]}`
            answerExspandedText.textContent = QandAList[i]['explanationToIncorrectAns']
            answerExspandedContaner.appendChild(answerShownToUsers)
            answerExspandedContaner.appendChild(userAnswer)
            answerExspandedContaner.appendChild(corrertAnswer)
            answerExspandedContaner.appendChild(answerExspandedText) 
            answerExspandedContaner.appendChild(answerBorderBreak) 
            returnAnswerToWrongQuestionsCon.appendChild(answerExspandedContaner)
        }
    }
    // this must be removed before the user restartes the quiz:)

    if(wrongAnswerFound){ displayTitleOfWrongList() }

    document.body.appendChild(returnAnswerToWrongQuestionsCon)

}